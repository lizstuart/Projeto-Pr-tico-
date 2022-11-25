const form = document.querySelector('form')
const inputEmail = document.querySelector('#e-mail');
const inputPassword = document.querySelector('#password');
const valid = document.querySelector('h3')
const register = document.querySelector('.registration')

const button = document.querySelector('#button');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputEmail.value || !inputPassword.value) {
        valid.textContent = 'Preencha os campos corretamente'
        return
    }

    window.location = '/home/home.html'
})

register.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.location = '/cadastro/cadastro.html'
})

