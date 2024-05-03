document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();
    // For demonstration purpose, assume login is successful
    displayPopup();
});

document.querySelector(".close").addEventListener("click", function () {
    hidePopup();
});

function displayPopup() {
    document.getElementById("loginSuccessPopup").style.display = "block";
}

function hidePopup() {
    document.getElementById("loginSuccessPopup").style.display = "none";
}
