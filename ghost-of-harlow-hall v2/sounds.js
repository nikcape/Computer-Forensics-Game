(function () {
  class SoundEngine {
    constructor() {
      this.AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      this.supported = !!this.AudioContextCtor;
      this.ctx = null;
      this.masterVolume = 0.7;
      this.uiEnabled = true;
      this.ambientEnabled = true;
      this.muted = false;
      this.unlocked = false;
      this.currentAmbientId = null;
      this.ambientNodes = [];
      this.ambientTimers = [];
      this.noiseBuffer = null;
    }

    applySettings(settings = {}) {
      this.masterVolume = typeof settings.masterVolume === 'number' ? settings.masterVolume : this.masterVolume;
      this.uiEnabled = settings.uiEnabled ?? this.uiEnabled;
      this.ambientEnabled = settings.ambientEnabled ?? this.ambientEnabled;
      this.muted = settings.muted ?? this.muted;
      if (!this.supported) return;
      if (this.currentAmbientId) this.startAmbient(this.currentAmbientId);
    }

    unlock() {
      if (!this.supported) return false;
      if (!this.ctx) {
        this.ctx = new this.AudioContextCtor();
        this.noiseBuffer = this.createNoiseBuffer();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      this.unlocked = true;
      return true;
    }

    createNoiseBuffer() {
      const length = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < length; i += 1) {
        data[i] = (Math.random() * 2 - 1) * 0.65;
      }
      return buffer;
    }

    createMasterGain(level) {
      const gain = this.ctx.createGain();
      const finalLevel = this.muted ? 0 : level * this.masterVolume;
      gain.gain.setValueAtTime(finalLevel, this.ctx.currentTime);
      gain.connect(this.ctx.destination);
      return gain;
    }

    playTone(type, frequency, duration, level, options = {}) {
      if (!this.supported || !this.unlocked) return;
      const osc = this.ctx.createOscillator();
      const gain = this.createMasterGain(level);
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      if (options.endFrequency) {
        osc.frequency.exponentialRampToValueAtTime(options.endFrequency, this.ctx.currentTime + duration);
      }
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, level * this.masterVolume), this.ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      osc.start();
      osc.stop(this.ctx.currentTime + duration + 0.02);
      this.ambientNodes.push({ stop: () => { try { osc.stop(); } catch (_) {} gain.disconnect(); } });
    }

    playNoise(duration, level, filterType = 'highpass', frequency = 900) {
      if (!this.supported || !this.unlocked || !this.noiseBuffer) return;
      const source = this.ctx.createBufferSource();
      source.buffer = this.noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = filterType;
      filter.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      const gain = this.createMasterGain(level);
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, level * this.masterVolume), this.ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      source.connect(filter);
      filter.connect(gain);
      source.start();
      source.stop(this.ctx.currentTime + duration + 0.02);
    }

    play(soundId) {
      if (!this.supported || !this.uiEnabled || this.muted) return;
      if (!this.unlocked) this.unlock();
      if (!this.unlocked) return;
      switch (soundId) {
        case 'hover':
          this.playTone('sine', 800, 0.05, 0.04);
          break;
        case 'collect':
          this.playTone('sine', 523.25, 0.18, 0.08);
          setTimeout(() => this.playTone('sine', 659.25, 0.22, 0.08), 120);
          break;
        case 'unlock':
          this.playTone('triangle', 400, 0.2, 0.08, { endFrequency: 800 });
          break;
        case 'warning':
          this.playTone('sawtooth', 150, 0.28, 0.07);
          break;
        case 'dialogue':
          this.playNoise(0.08, 0.05, 'bandpass', 1200);
          break;
        case 'modal':
          this.playNoise(0.12, 0.05, 'highpass', 1500);
          break;
        case 'verdict':
          this.playTone('triangle', 392, 0.3, 0.08);
          setTimeout(() => this.playTone('triangle', 493.88, 0.32, 0.08), 100);
          setTimeout(() => this.playTone('triangle', 587.33, 0.35, 0.09), 210);
          break;
        case 'certificate':
          [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, index) => {
            setTimeout(() => this.playTone('sine', freq, 0.25, 0.08), index * 140);
          });
          break;
        default:
          break;
      }
    }

    clearAmbient() {
      this.ambientTimers.forEach(timer => clearInterval(timer));
      this.ambientTimers = [];
      this.ambientNodes.forEach(node => {
        if (node.stop) node.stop();
      });
      this.ambientNodes = [];
    }

    startAmbient(locationId) {
      this.currentAmbientId = locationId;
      this.clearAmbient();
      if (!this.supported || !this.ambientEnabled || this.muted) return;
      if (!this.unlocked) return;
      const now = this.ctx.currentTime;
      const addDrone = (type, frequency, level) => {
        const osc = this.ctx.createOscillator();
        osc.type = type;
        osc.frequency.setValueAtTime(frequency, now);
        const gain = this.createMasterGain(level);
        gain.gain.setValueAtTime((this.muted ? 0 : level * this.masterVolume), now);
        osc.connect(gain);
        osc.start();
        this.ambientNodes.push({ stop: () => { try { osc.stop(); } catch (_) {} gain.disconnect(); } });
      };
      const addTimedAccent = (fn, ms) => {
        const timer = setInterval(fn, ms);
        this.ambientTimers.push(timer);
      };
      switch (locationId) {
        case 'victims-room':
          addDrone('sine', 110, 0.015);
          addTimedAccent(() => this.playNoise(0.18, 0.018, 'bandpass', 3600), 4200);
          break;
        case 'library':
          addDrone('triangle', 140, 0.014);
          addTimedAccent(() => this.playNoise(0.1, 0.015, 'highpass', 1700), 6200);
          break;
        case 'darren-dorm':
          addDrone('sawtooth', 95, 0.012);
          addTimedAccent(() => this.playTone('square', 980, 0.04, 0.018), 2600);
          break;
        case 'it-dept':
          addDrone('sawtooth', 120, 0.018);
          addDrone('triangle', 240, 0.009);
          break;
        case 'security-office':
          addDrone('triangle', 98, 0.013);
          addTimedAccent(() => this.playTone('square', 620, 0.03, 0.016), 1000);
          addTimedAccent(() => this.playNoise(0.06, 0.012, 'bandpass', 700), 5400);
          break;
        default:
          break;
      }
    }
  }

  window.GHH_V2_SOUND = { SoundEngine };
}());
