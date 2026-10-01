'use client';

// Sound utility using /sfx/switch.mp3
let switchAudio = null;

if (typeof window !== 'undefined') {
  try {
    switchAudio = new Audio('/sfx/switch.mp3');
    switchAudio.preload = 'auto';
    switchAudio.volume = 0.5;
  } catch (e) {}
}

export function playSwitchSound() {
  if (typeof window === 'undefined') return;
  try {
    if (switchAudio) {
      const sound = switchAudio.cloneNode();
      sound.volume = 0.45;
      sound.play().catch(() => {});
    }
  } catch (e) {}
}
