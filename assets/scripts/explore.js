// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.getElementById('face');
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.getElementById('talk-button');

  // Function to populate the voice select dropdown
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }

    let voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options if any

    voices.forEach(voice => {
      let option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  // Load voices and update the dropdown
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Function to handle speaking
  function speak() {
    if (speechSynthesis.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (textArea.value !== '') {
      const utterance = new SpeechSynthesisUtterance(textArea.value);
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === voiceSelect.selectedOptions[0].getAttribute('data-name'));

      utterance.onstart = function () {
        faceImage.src = 'assets/images/smiling-open.png'; // Change to open mouth image
      };

      utterance.onend = function () {
        faceImage.src = 'assets/images/smiling.png'; // Revert to the original smiling image
      };

      speechSynthesis.speak(utterance);
    }
  }

  // Event listener for the talk button
  talkButton.addEventListener('click', speak);
}