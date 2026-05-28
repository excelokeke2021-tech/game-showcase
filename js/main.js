// EMAILJS
emailjs.init('TPANEzOpBb1SJE1ha');

const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_7zmjd61',
        'template_5ce6wzv',
        this
    )
        .then(() => {
            message.innerHTML = '✅ Message sent successfully!';
            message.style.color = 'cyan';
            form.reset();
        })
        .catch((error) => {
            message.innerHTML = '❌ Failed to send message.';
            message.style.color = 'red';
            console.log(error);
        });
});