const inputBox = document.getElementById('input');

const button = document.getElementById('button')

button.addEventListener('click', addItem)



function addItem(){
  const inputValue = inputBox.value

  if(inputValue.trim() === ''){
    return;
  }
  
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.innerText = inputValue;
  list.appendChild(li);
  inputBox.value = '';
}
