// JS front-end functionality for logging out of the site

//LOGOUT
const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
      console.log(req.session.logged_in);
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);
