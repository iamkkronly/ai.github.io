const API_KEY = "YOUR_GEMINI_API_KEY";  // Replace with your Google Gemini API key

async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    document.getElementById("chat-box").innerHTML += `<p><b>You:</b> ${userInput}</p>`;

    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=" + API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: { text: userInput } })
    });

    let result = await response.json();
    let botReply = result.candidates[0]?.output || "Sorry, I couldn't process that.";

    document.getElementById("chat-box").innerHTML += `<p><b>AI:</b> ${botReply}</p>`;
    document.getElementById("user-input").value = "";
}
