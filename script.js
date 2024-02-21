let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");
let selctoption = document.querySelector("option");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[4];
  voices.forEach(
    (voice, i) => (voiceselect.options[i] = new Option(voice.name, i))
  );
  voiceselect.selectedIndex = 4;
};
voiceselect.addEventListener("change", () => {
  speech.voice = voices[voiceselect.value];
});
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
