document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.querySelector('.newsletter form');
    let message = document.querySelector('.message');

    form.addEventListener('submit', (e) =>{
        //prevents page reload leading to 405 error
        e.preventDefault();
        let email = document.getElementById('email').value;
        if (email === "") {
            message.textContent = "Please enter a valid email address";
        }
        else {
            message.textContent = `Thank you! Your email address ${email} has been added to the mailing list`;
        }
})
})
