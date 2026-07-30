// Web Audio API Synthesizer for subtle tactile UI sound feedback

class SoundEffects {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  constructor() {
    // Audio disabled
  }

  public setEnabled(value: boolean) {
    this.enabled = value;
  }

  public isEnabled(): boolean {
    return false;
  }

  public playClick() {
    return;
  }

  public playHover() {
    return;
  }

  public playSuccess() {
    return;
  }
}

export const sounds = new SoundEffects();
