const webhookUrl = "https://discord.com/api/webhooks/1334841293263601707/rm8h4oEkY0l9v14FIXfxNz8IgREc86a4pwDM2h_s8X-1XKGHRcrxURMAxH0XECJjJixj";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendButton").addEventListener("click", sendWebhookMessage);
});

function sendWebhookMessage() {
    const message = document.getElementById("messageInput").value;
    if (!message) {
        alert("Please enter a message!");
        return;
    }

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Error sending message!");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred!");
    });
}

// Ensure function is globally accessible
window.sendWebhookMessage = sendWebhookMessage;
