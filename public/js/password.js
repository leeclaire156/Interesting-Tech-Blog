function showPassword() {
    var input = document.querySelector(".password");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}