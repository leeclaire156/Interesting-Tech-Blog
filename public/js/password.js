function showPassword() {
    var input = document.getElementById("myPassword");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}