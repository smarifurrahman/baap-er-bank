// step - 1: add click event handler
document.getElementById('btn-submit').addEventListener('click', function () {

    // always remember to use value to get text from input field
    // step - 2: get the email address inside input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step - 3: get the password inside input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step - 4: verify email and password
    // DANGER!!! : Do not verify email, password on the client side
    if (email === 'sontan@baap.com' && password === '12345') {
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        alert('Password vule gesos!!! Kono taka pabina.');
    }
});