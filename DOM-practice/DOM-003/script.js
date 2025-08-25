const textArea = document.getElementById("message");
const counter = document.getElementById("counter");

textArea.addEventListener("input", function(e) {
  const valueLength = e.target.value.length;
  counter.innerText = `Characters typed: ${valueLength} / 200`;
  if(valueLength >= 180){
     counter.style.color = "red";
  }else {
    counter.style.color = "black"
  }
})