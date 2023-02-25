var postBtn = document.querySelector(".post-button");

postBtn.addEventListener("click", makePost);

async function makePost(event) {
    event.preventDefault();
    // Collect values from the new post form
    const title = document.querySelector('#new-post-title').value.trim();
    const body = document.querySelector('#new-post-content').value.trim();

    if (title && body) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("successfully made new post");
            document.location.replace('/dashboard');
            hidePostForm;
        }
    }
};


var newPostForm = document.querySelector("#new-post-form");
var newPostBtn = document.querySelector(".new-post-button");
var goBackBtn = document.querySelector(".back-button");
var dashboardPosts = document.querySelector(".posts");

newPostBtn.addEventListener("click", showPostForm);
goBackBtn.addEventListener("click", hidePostForm);

function showPostForm(event) {
    event.preventDefault();
    newPostForm.classList.remove("d-none");
    newPostBtn.classList.add("d-none");
    dashboardPosts.classList.add("d-none");
};

function hidePostForm(event) {
    event.preventDefault();
    newPostForm.classList.add("d-none");
    newPostBtn.classList.remove("d-none");
    dashboardPosts.classList.remove("d-none");
};