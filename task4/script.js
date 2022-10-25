document
    .querySelector('#textField')
    .addEventListener('click', function (event) {
        this.textContent = prompt('Введенный Вами текст заменит текущий в ссылке', 'Введите любой текст');
        event.preventDefault();
    });
