const loginForm = async (event) => {
    event.preventDefault();
    const login = document.querySelector('#login');

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/');
        } else {
            const loginFailed = document.createElement('p');
            loginFailed.textContent = `Incorrect email or password. Please try again`

            loginFailed.append(login);
        }
    };
}



document
    .querySelector('#loginSubmit')
    .addEventListener('click', loginForm);


