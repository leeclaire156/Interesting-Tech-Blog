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

        if (response.ok) { console.log("successfully logged in") }
    }
};
