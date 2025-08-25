const textArea = document.getElementById("message");
const counter = document.getElementById("counter");

textArea.addEventListener("input", (e) => {
  let words = e.target.value.trim().split(/\s+/).filter(Boolean);
  if (words.length > 50) {
    words = words.slice(0, 50);
    e.target.value = words.join(" ");
  }
  counter.innerText = `Words typed: ${words.length} / 50`;
});



