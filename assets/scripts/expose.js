// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   // Access elements
   const hornSelect = document.getElementById('horn-select');
   const hornImage = document.getElementById('horn-image');
   const hornSound = document.getElementById('horn-sound');
   const volumeSlider = document.getElementById('volume-slider');
   const volumeIcon = document.getElementById('volume-icon');
   const playButton = document.getElementById('play-sound');
   const jsConfetti = new JSConfetti(); // assuming JSConfetti is globally available
 
   // Update horn based on selection
   hornSelect.addEventListener('change', () => {
     hornImage.src = `assets/images/${hornSelect.value}.svg`;
     hornSound.src = `assets/sounds/${hornSelect.value}.mp3`;
   });
 
   // Update volume icon and audio volume
   volumeSlider.addEventListener('input', () => {
     let volumeLevel = volumeSlider.value;
     hornSound.volume = volumeLevel / 100;
     if (volumeLevel == 0) {
       volumeIcon.src = 'assets/icons/volume-level-0.svg';
     } else if (volumeLevel < 33) {
       volumeIcon.src = 'assets/icons/volume-level-1.svg';
     } else if (volumeLevel < 67) {
       volumeIcon.src = 'assets/icons/volume-level-2.svg';
     } else {
       volumeIcon.src = 'assets/icons/volume-level-3.svg';
     }
   });
 
   // Play sound and trigger confetti if party horn is selected
   playButton.addEventListener('click', () => {
     hornSound.play(); // Play the sound
 
     if (hornSelect.value === 'party-horn') {
       jsConfetti.addConfetti(); // Trigger confetti
     }
   });
}