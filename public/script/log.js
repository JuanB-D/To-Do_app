const loginForm = document.querySelector('.l-form');
loginForm.addEventListener('submit', async(e) =>{
    e.preventDefault()
    const data = {};
    const formData = new FormData(loginForm);
    formData.forEach((value, key) =>{
        data[key] = value
    })

    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: data.password,
            email: data.email
        })
    });
    
    const message = document.querySelector('.message');

    if(!response.ok){
        message.innerHTML = 'error during login';
        message.style.color = 'red'
        return
    }

        message.innerHTML = 'register succesfully';
        message.style.color = 'green'
        const datas = response.data
        console.log(datas)
})


const goToRegister = document.getElementById('Register');
goToRegister.addEventListener('click', (e) =>{
    e.preventDefault()
    window.location.href = './reg.html'
})
