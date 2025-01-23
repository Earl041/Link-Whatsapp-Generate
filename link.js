function generateLink() {
    const message = document.getElementById("message").value;
    const number = document.getElementById("number").value;
    const linkContainer = document.getElementById("generated-link-container");
    const linkDisplay = document.getElementById("generated-link");

    if (!number) {
        alert("Please enter a WhatsApp number!");
        return;
    }

    // Encode the message to handle spaces and special characters
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${number}?text=${encodedMessage}`;

    // Display the generated link
    linkDisplay.textContent = link;
    linkContainer.style.display = "block";
}

function copyLink() {
    const linkText = document.getElementById("generated-link").textContent;

    // Copy the link to clipboard
    navigator.clipboard.writeText(linkText).then(() => {
        alert("Link copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy the link: " + err);
    });
}
