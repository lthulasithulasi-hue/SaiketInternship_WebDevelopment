function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

document.getElementById("contactForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});