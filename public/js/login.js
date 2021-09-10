const loginBtn = document.querySelector('#loginBtn');

const loginForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                password: password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/');
        }
        // else {
        //     const loginFailed = document.createElement('p');
        //     loginFailed.textContent = `Incorrect email or password. Please try again`

        //     loginFailed.append(login);
        // }
    };
}


loginBtn.addEventListener('click', loginForm);
