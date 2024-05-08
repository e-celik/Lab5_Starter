// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var speakButton = document.querySelector('button');
  speakButton.addEventListener('click', speak);

  var voiceSelector = document.getElementById('voice-select');

  var textBox = document.getElementById('text-to-speak');

  const synth = window.speechSynthesis;
  synth.onvoiceschanged = function() {
    var voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelector.appendChild(option);
    }//much of this was taken from mozilla
};
  
  function speak() {
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    const selectedOption =
    voiceSelector.selectedOptions[0].getAttribute("data-name");
    var voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }//much of this was taken from mozilla
    }
    synth.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      document.querySelector('img').src='assets/images/smiling.png'
    });
    
    document.querySelector('img').src='assets/images/smiling-open.png';
  }
}