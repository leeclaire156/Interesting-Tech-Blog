var signupBtn = document.querySelector(".signup-button");

signupBtn.addEventListener("click", signUp);

async function signUp(event) {
    event.preventDefault();
    // Collect values from the sign up form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) { console.log("successfully signed up") }
    }
};

//Pressing Enter is the same as clicking the submit button
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        signupBtn.click();
    }
});