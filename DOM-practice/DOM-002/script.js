function toggleButt(){
  const element = document.body;
  const button = document.getElementById("button");

  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    button.innerText = "Switch to Light Mode";
  } else {
    button.innerText = "Switch to Dark Mode";
  }
}
