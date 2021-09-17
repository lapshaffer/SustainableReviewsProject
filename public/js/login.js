const loginBtn = document.querySelector('#loginBtn');
const close = document.querySelector('#closeModal');

const loginForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#loginName').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (name && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                password: password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
            console.log("successfully logged in!")
        }
        else {
            $('#modal-message').text('Incorrect username and password. Please try again!');
            $('#myModal').modal('show');
        }
    };
}


loginBtn && loginBtn.addEventListener('click', loginForm);
close && close.addEventListener('click', () => { $('#myModal').modal('hide'); });

