window.addEventListener('DOMContentLoaded', init);

function init() {
    // Access elements
    const hornSelect = document.getElementById('horn-select');
    const hornImage = document.querySelector('img[alt="No image selected"]');
    const hornSound = document.querySelector('audio');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const playButton = document.querySelector('button');
    const jsConfetti = new JSConfetti(); // assuming JSConfetti is globally available

    // Update horn based on selection
    hornSelect.addEventListener('change', () => {
        if (hornSelect.value !== 'select') {
            hornImage.src = `assets/images/${hornSelect.value}.svg`;
            hornSound.src = `assets/audio/${hornSelect.value}.mp3`;
        }
    });

    // Update volume icon and audio volume
    volumeSlider.addEventListener('input', () => {
        let volumeLevel = volumeSlider.value;
        hornSound.volume = volumeLevel / 100;
        updateVolumeIcon(volumeLevel, volumeIcon);
    });

    // Play sound and trigger confetti if party horn is selected
    playButton.addEventListener('click', () => {
        if (hornSelect.value !== 'select') {
            hornSound.play(); // Play the sound
            if (hornSelect.value === 'party-horn') {
                jsConfetti.addConfetti(); // Trigger confetti
            }
        }
    });
}

function updateVolumeIcon(volumeLevel, volumeIcon) {
    if (volumeLevel == 0) {
        volumeIcon.src = 'assets/icons/volume-level-0.svg';
        volumeIcon.alt = 'Mute';
    } else if (volumeLevel < 33) {
        volumeIcon.src = 'assets/icons/volume-level-1.svg';
        volumeIcon.alt = 'Volume low';
    } else if (volumeLevel < 67) {
        volumeIcon.src = 'assets/icons/volume-level-2.svg';
        volumeIcon.alt = 'Volume medium';
    } else {
        volumeIcon.src = 'assets/icons/volume-level-3.svg';
        volumeIcon.alt = 'Volume high';
    }
}
