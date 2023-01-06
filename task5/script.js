let form = document.querySelector('#form');
let textInput = document.querySelector('#textInput');
let text = document.querySelector('#duplicateField');

textInput.addEventListener('keypress', (event) => {
    text.textContent = text.textContent + event.key;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(text.textContent);
    text.textContent = '';
    form.reset();
});