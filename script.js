document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".typed-text", {
        strings: ["Frontend Developer", "YouTube", "Web Developer"],
        typeSpeed: 100,
        backdelay:1000,
        backSpeed: 100,
        loop: true
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

