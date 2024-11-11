document.addEventListener('DOMContentLoaded', () =>{
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    const nameCookie = getCookie('name');
    document.querySelector('.name').innerHTML = `${nameCookie} !`

})
