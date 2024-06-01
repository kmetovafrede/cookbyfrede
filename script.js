// Get the button element
var translateButton = document.getElementById("translateButton");

// Add click event listener to the button
translateButton.addEventListener("click", function() {
    // Toggle between English and Slovak
    if (translateButton.textContent === "English") {
        // Change the page to indexeu.html if the button is English
        window.location.href = "../english/indexen.html";
    } else if (translateButton.textContent === "Slovak") {
        // Change the page to index.html if the button is Slovak
        window.location.href = "../html/index.html";
    }
});

