function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple validation example
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }

    // You can add more complex validation here if needed

    return true;
}