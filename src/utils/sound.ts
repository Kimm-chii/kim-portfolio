// Web Audio API Synthesizer for subtle tactile UI sound feedback

class SoundEffects {
  public setEnabled(_value: boolean) {}

  public isEnabled(): boolean {
    return false;
  }

  public playClick() {}

  public playHover() {}

  public playSuccess() {}
}

export const sounds = new SoundEffects();
