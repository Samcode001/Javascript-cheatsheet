console.log("Hello");

let userName = document.getElementById('username');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let usernameValid = false;
let phoneValid = false;
let emailValid = false;

userName.addEventListener('blur', () => {
    console.log(" UserName Blurred")
    let regex = /^[\_a-zA-Z]([\_a-zA-Z0-9]){2,10}$/;
    let val = userName.value;
    if (regex.test(val)) {
        console.log("Matched");
        userName.classList.remove('is-invalid');
        usernameValid = true;
    }
    else {
        console.log("Not Matched");
        userName.classList.add('is-invalid');
        usernameValid = false;
    }
})

phone.addEventListener('blur', () => {
    console.log(" Phone Blurred")
    let regex = /^([0-9]){10}$/;
    let val = phone.value;
    if (regex.test(val)) {
        console.log("Matched");
        phone.classList.remove('is-invalid');
        phoneValid = true;
    }
    else {
        console.log("Not Matched");
        phone.classList.add('is-invalid');
        phoneValid = false;
    }
})
email.addEventListener('blur', () => {
    console.log(" Email Blurred")
    let regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z0-9]+).[a-z]{2,7}$/;
    let val = email.value;
    if (regex.test(val)) {
        console.log("Matched");
        email.classList.remove('is-invalid');
        emailValid = true;
    }
    else {
        console.log("Not Matched");
        email.classList.add('is-invalid');
        emailValid = false;
    }
})
let submit = document.getElementById('submit');
let anim = document.querySelector(".anim");


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (usernameValid && phoneValid && emailValid) {
        let html = ` <div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
        <strong>Success!</strong> Your form is Submitted Successfully .
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
        anim.innerHTML = html;
        setTimeout(() => {
            anim.innerHTML = "";
        }, 2000);
    }
    else {
        html = ` <div class="alert alert-danger alert-dismissible fade show" id="failure" role="alert">
            <strong>Error!</strong> Some error occured.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        anim.innerHTML = html;
        setTimeout(() => {
            anim.innerHTML = "";
        }, 2000);
    }
});

