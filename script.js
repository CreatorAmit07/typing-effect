const texts = ["Front-End Developer", "Freelancer", "Web Designer", "JavaScript Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
})();

function erase() {
  if (index > 0) {
    letter = currentText.slice(0, --index);
    document.querySelector(".typing-text").textContent = letter;
    setTimeout(erase, 50);
  } else {
    count++;
    setTimeout(type, 200);
  }
}
