function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Opens the visitor's email app with the message filled in (no account needed).
// To send directly from the page instead, see the EmailJS note in the README steps.
function sendMail(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(message + "\n\n" + name + " (" + email + ")");
    window.location.href = "mailto:mdfardinalshafik@gmail.com?subject=" + subject + "&body=" + body;
}
