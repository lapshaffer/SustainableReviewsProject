const signupSubmit = document.querySelector('#signupSubmit');

const signupForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signupName').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (name && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        }
    }
};


signupSubmit.addEventListener('click', signupForm);