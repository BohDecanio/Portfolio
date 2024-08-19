document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        message: document.getElementById('inputMessage').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Your message has been sent successfully!', response.status, response.text);
        }, function(error) {
            alert('Failed to send the message, please try again.', error);
        });
});
