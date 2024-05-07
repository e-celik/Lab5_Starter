// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var audioElement = document.querySelector('audio')
  audioElement.volume = 0.5;

  var volumeIcon = document.querySelector('#volume-controls img')
  volumeIcon.src='assets/icons/volume-level-2.svg';

  var volumeSlider = document.getElementById('volume');
  volumeSlider.addEventListener('input', updateVolume);

  var soundButton = document.querySelector("button");
  soundButton.addEventListener('click', playSound);

  var hornSelector = document.getElementById('horn-select');
  hornSelector.addEventListener('change', changeHorn);

  var hornIcon = document.querySelector('#expose img');
  hornIcon.src='assets/images/no-image.png';

  const jsConfetti = new JSConfetti()



  function updateVolume() {
    audioElement.volume = volumeSlider.value / 100;
    if (audioElement.volume == 0) {
      volumeIcon.src='assets/icons/volume-level-0.svg';  }
    else if (audioElement.volume < 0.33) {
      volumeIcon.src='assets/icons/volume-level-1.svg';  }
    else if (audioElement.volume < 0.66) {
      volumeIcon.src='assets/icons/volume-level-2.svg';  }
    else {//(audio Element.volume < 1.00)
      volumeIcon.src='assets/icons/volume-level-3.svg';  }
  }
  
  function playSound() {
    if (hornSelector.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
    audioElement.play();
  }
  
  function changeHorn() {
    let newHorn = hornSelector.value;

    switch(newHorn) {
      case 'air-horn':
        hornIcon.src='assets/images/air-horn.svg';
        audioElement.src='assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornIcon.src='assets/images/car-horn.svg';
        audioElement.src='assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornIcon.src='assets/images/party-horn.svg';
        audioElement.src='assets/audio/party-horn.mp3';
        break;
      default:
        hornIcon.src='assets/images/no-image.png'
        audioElement.src='';
    }
  }
}

