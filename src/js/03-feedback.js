import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));


let formData;
 

populateForm();

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
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    formData[evt.target.name] = evt.target.value;
    const message = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, message);
}


function getLocalStorege() {
    return localStorage.getItem(STORAGE_KEY);
  }


function populateForm() {
    const data = JSON.parse(getLocalStorege());

    if (getLocalStorege()) {
        
        input.value = data.email || '';
        textarea.value = data.message || '';
    }
}


