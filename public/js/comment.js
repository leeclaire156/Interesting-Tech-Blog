var addCommentBtn = document.querySelector(".add-comment-button");

if (addCommentBtn) {
    addCommentBtn.addEventListener("click", makeComment);
}

async function makeComment(event) {
    event.preventDefault();
    // Collect values from the new comment form
    const body = document.querySelector('#comment-content').value.trim();

    const postTitle = document.querySelector(".post-title");
    const post_id = postTitle.getAttribute("data-id");
    console.log(body, post_id)

    if (body && post_id) {
        console.log(JSON.stringify({ body, post_id }))
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("successfully made new comment");
            document.location.replace(`/post/${post_id}`);
            hideCommentForm;
        }
    }
};

var addCommentForm = document.querySelector("#add-comment-form");
var commentFormBtn = document.querySelector(".comment-form-btn")
var goBackBtn = document.querySelector(".back-button");

commentFormBtn.addEventListener("click", showCommentForm);
goBackBtn.addEventListener("click", hideCommentForm);

function showCommentForm(event) {
    event.preventDefault();
    addCommentForm.classList.remove("d-none");
    commentFormBtn.classList.add("d-none");
};

function hideCommentForm(event) {
    event.preventDefault();
    addCommentForm.classList.add("d-none");
    commentFormBtn.classList.remove("d-none");
};