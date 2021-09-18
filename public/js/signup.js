const signupSubmit = document.querySelector('#signupSubmit');
const close = document.querySelector('#closeModal');

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
        else {
            $('#modal-message').text('That username has been taken. Please try again!')
            $('#myModal').modal('show')
        }
    } else {
        $('#modal-message').text('Please enter a username and password.')
        $('#myModal').modal('show')
    }
};


signupSubmit && signupSubmit.addEventListener('click', signupForm);
close && close.addEventListener('click', () => { $('#myModal').modal('hide'); });