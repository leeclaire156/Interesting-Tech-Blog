//Make new post var
var newPostForm = document.querySelector("#new-post-form");
var newPostBtn = document.querySelector(".new-post-button");
var goBackBtn = document.querySelector(".post-back-button");
var dashboardPosts = document.querySelector(".posts");

var postBtn = document.querySelector(".post-button");

// Delete post var
var deleteBtns = document.querySelectorAll(".delete-post-button");

// Edit post var

var editPostForm = document.querySelector("#edit-post-form");
var editGoBackBtn = document.querySelector(".edit-back-button");

var editBtns = document.querySelectorAll(".edit-post-button");
var updateBtn = document.querySelector(".update-button");



//Make new post functions

newPostBtn.addEventListener("click", showPostForm);

function showPostForm(event) {
    event.preventDefault();
    newPostForm.classList.remove("d-none");
    newPostBtn.classList.add("d-none");
    dashboardPosts.classList.add("d-none");
}

goBackBtn.addEventListener("click", hidePostForm);

function hidePostForm(event) {
    event.preventDefault();
    newPostForm.classList.add("d-none"); //hides new post form
    newPostBtn.classList.remove("d-none"); //new post button reappears
    dashboardPosts.classList.remove("d-none"); //existing posts come back

}

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
            document.location.replace('/dashboard');
            hidePostForm();
        }
    }
}


// Delete post functions

deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', deletePost);
});

async function deletePost() {
    const id = this.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
        alert('Failed to delete post');
    }
}


// Edit post functions

editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', openPostEditor);
});

function openPostEditor(event) {
    event.preventDefault();

    // Obtains information about target post
    var id = this.getAttribute('data-id');
    var titleText = this.parentElement.parentElement.previousElementSibling.children[0].innerText;
    var bodyContent = this.parentElement.previousElementSibling.textContent.trim();

    // Opens edit form
    editPostForm.classList.remove("d-none");
    newPostBtn.classList.add("d-none");

    // Sets edit form's data-id to the respective post's id for the Update button
    const editFormID = document.createAttribute("data-id");
    editFormID.value = id;
    const updateBtn = document.querySelector('.update-button');
    updateBtn.setAttributeNode(editFormID);

    // Sets edit form's title to the respective post's title
    const att = document.createAttribute("value");
    att.value = titleText;
    const editPostFormTitle = document.querySelector('#edited-post-title');
    editPostFormTitle.setAttributeNode(att);

    // Sets edit form's body to the respective post's body
    const editPostFormBody = document.querySelector('#edited-post-content');
    editPostFormBody.innerText = bodyContent;
}

editGoBackBtn.addEventListener("click", hideEditForm);

function hideEditForm(event) {
    event.preventDefault();
    editPostForm.classList.add("d-none"); //hides edit form
    newPostBtn.classList.remove("d-none"); //new post button reappears
}

updateBtn.addEventListener('click', updatePost);

async function updatePost(event) {
    event.preventDefault();

    const id = this.getAttribute('data-id');

    const title = document.querySelector('#edited-post-title').value;

    const body = document.querySelector('#edited-post-content').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });


    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
        alert('Failed to edit post');
    }
}

