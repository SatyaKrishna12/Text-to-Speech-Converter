let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");
let selctoption = document.querySelector("option");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach(
    (voice, i) => (voiceselect.options[i] = new Option(voice.name, i))
  );
  speech.voice = voices[0];
};
voiceselect.addEventListener("change", () => {
  speech.voice = voices[voiceselect.value];
});
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
