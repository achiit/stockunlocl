document.getElementById("registerBtn").addEventListener("click", function () {
    // Validate registration
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // For demonstration purpose, let's check if passwords match
    if (password === confirmPassword) {
        // Redirect to login page after successful registration
        alert("Registration successful! You can now login.");
        window.location.href = "login.html";
    } else {
        alert("Passwords do not match. Please try again.");
    }
});
