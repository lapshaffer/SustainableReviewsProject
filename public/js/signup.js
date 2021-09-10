const signupSubmit = document.querySelector('#signupSubmit');

const signupForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signupName').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};


signupSubmit.addEventListener('click', signupForm);