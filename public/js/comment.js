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


// Delete comment functions

var deleteBtns = document.querySelectorAll(".delete-comment-button");

deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', deleteComment);
})

async function deleteComment() {
    const id = this.getAttribute('data-id');

    const postTitle = document.querySelector(".post-title");
    const post_id = postTitle.getAttribute("data-id");

    console.log("Clicked!", id)
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace(`/post/${post_id}`);
    } else {
        alert(response.statusText);
        alert('Failed to delete comment');
    }
};

// // Edit comments functions

// var editPostForm = document.querySelector("#edit-post-form");
// var newPostBtn = document.querySelector(".new-post-button");
// var goBackBtn = document.querySelector(".back-button");

// var editBtns = document.querySelectorAll(".edit-post-button");
// var updateBtn = document.querySelector(".update-button")

// editBtns.forEach((editBtn) => {
//     editBtn.addEventListener('click', openPostEditor);
// })

// function openPostEditor(event) {
//     event.preventDefault();

//     // Obtains information about target post
//     var id = this.getAttribute('data-id');
//     var titleText = this.parentElement.parentElement.previousElementSibling.children[0].innerText;
//     var bodyContent = this.parentElement.previousElementSibling.textContent.trim();

//     // Opens edit form
//     editPostForm.classList.remove("d-none");
//     newPostBtn.classList.add("d-none");

//     // Sets edit form's data-id to the respective post's id for the Update button
//     const editFormID = document.createAttribute("data-id");
//     editFormID.value = id;
//     const updateBtn = document.querySelector('.update-button');
//     updateBtn.setAttributeNode(editFormID);

//     // Sets edit form's title to the respective post's title
//     const att = document.createAttribute("value");
//     att.value = titleText;
//     const editPostFormTitle = document.querySelector('#edited-post-title');
//     editPostFormTitle.setAttributeNode(att);

//     // Sets edit form's body to the respective post's body
//     const editPostFormBody = document.querySelector('#edited-post-content');
//     editPostFormBody.innerText = bodyContent;
// }

// updateBtn.addEventListener('click', updatePost);
// async function updatePost(event) {
//     event.preventDefault();

//     const id = this.getAttribute('data-id');

//     const title = document.querySelector('#edited-post-title').value;

//     const body = document.querySelector('#edited-post-content').value;

//     const response = await fetch(`/api/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ title, body }),
//         headers: { 'Content-Type': 'application/json' },
//     });


//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert(response.statusText);
//         alert('Failed to edit post');
//     }
// };