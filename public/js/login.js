var loginBtn = document.querySelector(".login-button");

loginBtn.addEventListener("click", logIn);

async function logIn(event) {
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the home page
            document.location.replace('/');
        } else {
            console.error(response.statusText);
        }
    }
};

//Pressing Enter is the same as clicking the submit button
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        loginBtn.click();
    }
});