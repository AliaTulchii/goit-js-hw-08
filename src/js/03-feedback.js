import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));



let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateForm();

function onFormSubmit(evt) {
    evt.preventDefault();


    if (input.value == '' || textarea.value == '') {
        return;
    }

    console.log({ email: input.value, message: textarea.value });

    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}


function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}



function populateForm() {
    if (formData) {
        let { email, message } = form.elements;
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}