/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speakButton');

/* Arrays */


var nouns = ['cat', 'dog', 'house', 'car', 'tree'];
var verbs = ['run', 'jump', 'eat', 'sleep', 'dance'];
var adjectives = ['happy', 'sad', 'big', 'small', 'funny'];
var nouns2 = ['ball', 'book', 'flower', 'friend', 'computer'];
var places = ['park', 'beach', 'mountain', 'city', 'school'];



/* Functions */
function getRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function updateTextToSpeak() {
  textToSpeak =
    getRandomItem(nouns) +
    ' ' +
    getRandomItem(verbs) +
    ' ' +
    getRandomItem(adjectives) +
    ' ' +
    getRandomItem(nouns2) +
    ' ' +
    getRandomItem(places);
}

function speakNow() {
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}



  
  

/* Event Listeners */
document.getElementById('nounButton').addEventListener('click', function () {
  updateTextToSpeak();
});

document.getElementById('verbButton').addEventListener('click', function () {
  updateTextToSpeak();
});

document.getElementById('adjectiveButton').addEventListener('click', function () {
  updateTextToSpeak();
});

document.getElementById('noun2Button').addEventListener('click', function () {
  updateTextToSpeak();
});

document.getElementById('placeButton').addEventListener('click', function () {
  updateTextToSpeak();
});

speakButton.addEventListener('click', function () {
  speakNow();
});


