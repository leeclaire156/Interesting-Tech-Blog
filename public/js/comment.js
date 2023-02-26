// Add new comments functions
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

    if (body && post_id) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("successfully made new comment");
            document.location.replace(`/post/${post_id}`);
            hideCommentForm();
        }
    }
}

var addCommentForm = document.querySelector("#add-comment-form");
var commentFormBtn = document.querySelector(".comment-form-btn");
var goBackBtn = document.querySelector(".back-button");

commentFormBtn.addEventListener("click", showCommentForm);
goBackBtn.addEventListener("click", hideCommentForm);

function showCommentForm(event) {
    event.preventDefault();
    addCommentForm.classList.remove("d-none");
    commentFormBtn.classList.add("d-none");
}

function hideCommentForm(event) {
    event.preventDefault();
    addCommentForm.classList.add("d-none");
    commentFormBtn.classList.remove("d-none");
}

// Edit comments functions

var editCommentForm = document.querySelector("#edit-comment-form");
var goBackBtn = document.querySelector(".back-button");

var editBtns = document.querySelectorAll(".edit-comment-button");
var updateBtn = document.querySelector(".update-button");

editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', openCommentEditor);
});

function openCommentEditor(event) {
    event.preventDefault();

    // Obtains information about target comment
    var id = this.getAttribute('data-id');
    var bodyContent = this.parentElement.previousElementSibling.textContent.trim();

    // Opens edit form
    editCommentForm.classList.remove("d-none");
    commentFormBtn.classList.add("d-none");

    // Sets edit form's data-id to the respective post's id for the Update/Delete buttons
    const editFormID = document.createAttribute("data-id");
    editFormID.value = id;
    const updateBtn = document.querySelector('.update-button');
    updateBtn.setAttributeNode(editFormID);

    const deleteID = document.createAttribute("id");
    deleteID.value = id;
    const deleteBtn = document.querySelector('.delete-comment-button');
    deleteBtn.setAttributeNode(deleteID);

    // Sets edit form's body to the respective post's body
    const editCommentFormBody = document.querySelector('#edited-comment-content');
    editCommentFormBody.innerText = bodyContent;
}

if (updateBtn) {
    updateBtn.addEventListener('click', updateComment);
}

async function updateComment(event) {
    event.preventDefault();

    const id = this.getAttribute('data-id');

    const body = document.querySelector('#edited-comment-content').value;

    const postTitle = document.querySelector(".post-title");
    const post_id = postTitle.getAttribute("data-id");

    console.log(id, body);
    //CHECK CONTROLLER IF POSTID AND OR COMMENT ID NEEDS TO BE PASSED IN
    const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, body }),
        headers: { 'Content-Type': 'application/json' },
    });


    if (response.ok) {
        document.location.replace(`/post/${post_id}`);
    } else {
        alert('Unauthorized permission');
    }
};

// Delete comment functions
var deleteBtn = document.querySelector(".delete-comment-button");

if (deleteBtn) {
    deleteBtn.addEventListener('click', deleteComment);
}

async function deleteComment() {
    const id = this.getAttribute('id');

    const postTitle = document.querySelector(".post-title");
    const post_id = postTitle.getAttribute("data-id");

    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace(`/post/${post_id}`);
    } else {
        alert('Unauthorized permission');
    }
}