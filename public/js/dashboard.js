var deleteBtns = document.querySelectorAll(".delete-post-button");

deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', deletePost);
})


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
};

//TODO: Make edit post function