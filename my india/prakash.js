// Welcome message on page load
window.onload = function () {
    alert("Welcome to India - 'India once is not enough!'");
};

// Highlight the "Mumbai" text on hover
document.addEventListener("DOMContentLoaded", function () {
    const mumbaiText = document.getElementById("mumbai-highlight");

    if (mumbaiText) {
        mumbaiText.addEventListener("mouseover", function () {
            mumbaiText.style.color = "orange";
        });

        mumbaiText.addEventListener("mouseout", function () {
            mumbaiText.style.color = "turquoise";
        });
    }

    // Sign-up button click simulation
    const signupBtn = document.getElementById("signup-btn");
    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            alert("Thank you for signing up!");
        });
    }
});