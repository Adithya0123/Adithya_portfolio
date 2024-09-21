document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const now = new Date();
    const formattedDate = now.toLocaleString();

    // Create the message to send to Telegram
    const telegramMessage = `Contact Form: \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nTime: ${formattedDate}`;
    const botToken = '7328308326:AAHwicjdFumcsioPuJ9ANhc6B6tKk2LeoiI';
    const chatId = '827945931';

    // Construct the URL for the Telegram API request
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`;

    // Send the data to Telegram using fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Message sent successfully!');
                document.getElementById('contactForm').reset(); // Clear the form
            } else {
                alert('Error sending message.');
            }
        })
       .catch(error => {
            console.error('Error:', error);
            alert('Error sending message.');
        });
});
