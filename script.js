const masterPassword = "82025840"; // Replace with your master password

document.getElementById("loginBtn").addEventListener("click", function () {
    const enteredPassword = document.getElementById("password").value;
    if (enteredPassword === masterPassword) {
        // Password is correct, allow access
        window.location.href = "welcome.html"; // Redirect to a welcome page
    } else {
        // Password is incorrect, display error message
        document.getElementById("errorMessage").style.display = "block";
    }
});￼Enter
