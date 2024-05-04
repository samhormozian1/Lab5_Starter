window.addEventListener('DOMContentLoaded', init);

function init() {
    const textArea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const speakButton = document.querySelector('button');
    const faceImage = document.querySelector('img[alt="Smiling face"]');
    const openMouthImageSrc = 'assets/images/smiling-open.png'; // Path to open mouth image
    const closedMouthImageSrc = 'assets/images/smiling.png'; // Path to closed mouth image
    let synth = window.speechSynthesis;
    let voices = [];

    function populateVoices() {
        voices = synth.getVoices();
        voiceSelect.innerHTML = `<option value="select" disabled selected>Select Voice:</option>`; // Reset the dropdown
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            voiceSelect.appendChild(option);
        });
    }

    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = populateVoices;
    }

    speakButton.addEventListener('click', () => {
        if (textArea.value !== '' && voiceSelect.value !== 'select') {
            const utterance = new SpeechSynthesisUtterance(textArea.value);
            utterance.voice = voices.find(voice => voice.name === voiceSelect.value);

            utterance.onstart = () => {
                faceImage.src = openMouthImageSrc; // Change to open mouth image when speaking
            };

            utterance.onend = () => {
                faceImage.src = closedMouthImageSrc; // Revert to closed mouth image when done speaking
            };

            synth.speak(utterance);
        }
    });

    // Load voices initially
    populateVoices();
}
