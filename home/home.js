const main = document.querySelector('.main')
const deleteContact = document.querySelectorAll('.delete');
const logout = document.querySelector('.logout')

const add = document.querySelector('button');
const header = document.querySelector('.header');

const modal = document.querySelector('.modal')
const close = document.querySelector('.close');
const buttonsDelet = document.querySelectorAll('.buts')

const modalAdd = document.querySelector('.modal-add');
const closeAdd = document.querySelector('.close-add');
const buttonAdd = document.querySelector('#btn-add')

const inputs = document.querySelectorAll('input');
const clear = document.querySelector('#btn-clear');

logout.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();


    window.location = "/login/login.html"
});


for (const delet of deleteContact) {

    delet.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        modal.style.visibility = 'visible';
    });
};

close.addEventListener('click', (event) => {


    modal.style.visibility = 'hidden';
})

add.addEventListener('click', (event) => {

    modalAdd.style.visibility = 'visible'
});

closeAdd.addEventListener('click', (event) => {

    modalAdd.style.visibility = 'hidden'

});

buttonAdd.addEventListener('click', (event) => {

    modalAdd.style.visibility = 'hidden'
});


for (const button of buttonsDelet) {
    button.addEventListener('click', (event) => {

        modal.style.visibility = 'hidden';
    });
};

for (const input of inputs) {
    clear.addEventListener('click', (event) => {
        input.value = "";
    });
}






