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
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        // Optionally, you can reset the form here
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

