
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    const whatsappMessage =
        "Hello Nida!%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Message: " + encodeURIComponent(message);

    formStatus.textContent = "Opening WhatsApp...";

    window.open(
        "https://wa.me/923313078444?text=" + whatsappMessage,
        "_blank",
        "noopener,noreferrer"
    );
});
