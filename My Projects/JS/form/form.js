const createUserElement = (user) => {
    const usersElement = document.querySelector('.users');
    const element = document.createElement('div');
    element.innerText = user.name;
    usersElement.appendChild(element);
    }

const createUsers = (users) => {
    for (let user of users) {
        createUserElement(user);
    }
};

fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then(createUsers)

const form = document.querySelector('.registration');

const alertContainer = document.querySelector('.alert');



const saveFormRequest = async (user) => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const addedUser = await response.json();
        createUserElement(addedUser);

    } catch (e) {
        alertContainer.classList.toggle('hiddenAlert');
    }

};

const saveForm = (event) => {
    event.preventDefault();


    const arr = Array.from(event.target.elements).filter(elem => elem.type!=='checkbox');
    const user = {};

    for (let elem of arr) {
        const {name, value} = elem;
        user[name] = elem.type === 'checkbox' ? checked : value;

    }
    saveFormRequest(user);
    console.log(user);

}
form.addEventListener('submit', saveForm)

const gradeInput =  document.getElementById('grade');

//gradeInput.addEventListener('blur', () => alert('BLUR'));
//gradeInput.addEventListener('input', () => alert('INPUT'));
let isFormValid = true;

const submitButton = document.querySelector('.submit');

const toggleInputInvalid = (isValid, input) => {
    submitButton.disabled = !isValid;
    if (input.classList.contains('is-invalid') && isValid) {
        input.classList.remove('is-invalid');
    } else if (input.classList.contains('is-invalid') && !isValid) {
        input.classList.add('is-invalid');
    }
};

gradeInput.addEventListener('input', (event) => {
    const grade = event.target.value;
    if (grade < 2 || grade > 5) {
        isFormValid = false;
        event.target.classList.add('is-invalid')
        toggleInputInvalid(isFormValid, event.target);
    } else {
        isFormValid = true;
        toggleInputInvalid(isFormValid, event.target);

    }
});


const checkboxRequired = document.querySelector('input[type=checkbox]');
checkboxRequired.addEventListener('change', (event) => {
    submitButton.disabled = !event.target.checked
});