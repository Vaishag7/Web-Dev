console.log('This is Project 4')
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let namevalid = false;
let phonevalid = false;
let emailvalid = false;
//success.classList.add('d-none')
//failure.classList.add('d-none')


name.addEventListener('blur', () => {
    console.log('name is blurred')
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/
    let str = name.value;
    if (regex.test(str)) {
        console.log('Username is valid')
        name.classList.remove('is-invalid')
        namevalid = true
    }
    else {
        console.log('Username is not valid')
        name.classList.add('is-invalid')
        namevalid = false ; 
    }
})

email.addEventListener('blur', () => {
    console.log('email is blurred')
    let regex = /^([_\.\-0-9a-zA-z]+)@([_\.\-0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    if (regex.test(str)) {
        console.log('email is valid')
        email.classList.remove('is-invalid')
        emailvalid = true
    }
    else {
        console.log('Email is not valid')
        email.classList.add('is-invalid')
        emailvalid = false
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred')
    let regex = /([0-9]{10})/
    let str = phone.value;
    if (regex.test(str)) {
        console.log('phone is valid')
        phone.classList.remove('is-invalid')
        phonevalid = true
    }
    else {
        console.log('Phone is not valid')
        phone.classList.add('is-invalid')
        phonevalid = false
    }
})

let submit = document.getElementById('submit')
let failure = document.getElementById('failure') 
submit.addEventListener('click', (e) => {
    if (namevalid && phonevalid && emailvalid) {
        console.log('The form is submitted')
        e.preventDefault()
        let success = document.getElementById('success')
        success.classList.add('show')
        failure.classList.add('d-none')
        //$('#success').show()
        //$('#failure').hide()
    }
    else{
        
        console.log('Not submitted due to errors')
        let failure = document.getElementById('failure') 
        failure.classList.add('show')
        success.classList.add('d-none')
        //$('#failure').show()
        //$('#success').hide()
    }

})


