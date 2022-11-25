const form = document.querySelector('form');
const clickIn = document.querySelector('.click-in');
const register = document.querySelector('.confirm');
const cancel = document.querySelector('.cancel')

clickIn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.location = "/login/login.html"
});


register.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.location = "/login/login.html"
});

cancel.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.location = "/login/login.html"
})

