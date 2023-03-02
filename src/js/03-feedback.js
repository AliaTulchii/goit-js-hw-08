import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

const formData = {};

function onFormSubmit(evt) {
    evt.preventDefault();


    if (input.value == '' || textarea.value == '') {
        return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
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
    const savedData = localStorage.getItem(STORAGE_KEY);
    

    if (savedData) {
        input.value = savedData.email;
        textarea.value = savedData.message;
    }
}

