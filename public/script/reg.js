const inputs = {
    name: document.getElementById('name'),
    password: document.getElementById('password'),
    cPassword: document.getElementById('confirmPassword'),
    email: document.getElementById('email')
}
const suggest = {
    name: document.querySelector('.sugN'),
    password: document.querySelector('.sugP'),
    cPassword: document.querySelector('.sugCn'),
    email: document.querySelector('.sugM')
}
// Every condition that pass one of the values will gonna get the value true
const validations = [false, false, false]
// This validate if name contains min 6 chracters
inputs.name.addEventListener('input', () =>{
    if(inputs.name.value.length < 6){
        validations[0] = false
        inputs.name.style.border = 'solid 1px red';
        suggest.name.innerHTML = 'min 6 chracters'
    }else{
        validations[0] = true;
        inputs.name.style.border = 'solid 1px green';
        suggest.name.innerHTML = ''

    }
})
// This validate if password contains min 6 chracters and 1 upperCase letter
inputs.password.addEventListener('input', () =>{
    const hasUpperCase = /[A-Z]/.test(inputs.password.value);
    if(inputs.password.value.length < 6){
        validations[1] = false;
        inputs.password.style.border = 'solid 1px red';
        suggest.password.innerHTML = 'min 6 chracters';
    }else if(!hasUpperCase){
        validations[1] = false;
        inputs.password.style.border = 'solid 1px red';
        suggest.password.innerHTML = 'min one upperCase letter'
    }else{
        validations[1] = true
        inputs.password.style.border = 'solid 1px green';
        suggest.password.innerHTML = '';
    }
})

// This validate if password and confirm password are equals
inputs.cPassword.addEventListener('input', () =>{
    if(inputs.password.value !== inputs.cPassword.value){
        inputs.cPassword.style.border = 'solid 1px red';
        suggest.cPassword.innerHTML = 'the passwords do not match'
    }else{
        inputs.cPassword.style.border = 'solid 1px green';
        suggest.cPassword.innerHTML = ''  
    }
})
const message = document.querySelector('.message')

const registerForm = document.querySelector('.r-form');
// This make the suggest to the backend to register the new User
registerForm.addEventListener('submit', async(e) =>{
    e.preventDefault();
    // This validate if all camps are correct
    validations.forEach(validation =>{
        if(validation === false){
            message.style.color = 'red'
            message.innerHTML = 'error during register'
            return;
        }
    })

    const data = {};
    const formData = new FormData(registerForm);

    formData.forEach((value, key) =>{
        data[key] = value;
    })

    const response = await fetch('http://localhost:3000/api/auth/register', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password
        })
    })
    if(!response.ok){
        message.style.color = 'red'
        message.innerHTML = 'error during register'
        return;
    }
    message.style.color = 'green'
    message.innerHTML = 'Register succesfully'
    window.location.href = './log.html'
})           

const goToLogin = document.getElementById('Login');
goToLogin.addEventListener('click', (e) =>{
    e.preventDefault()
    window.location.href = './log.html'
})