document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatArea = document.getElementById('chatArea');
    const messagesContainer = document.getElementById('messages');
    const initialMessage = document.getElementById('initialMessage');
    
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Listen for dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });
    
    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;
        
        // Hide initial message if it's the first user message
        if (initialMessage.style.display !== 'none') {
            initialMessage.style.display = 'none';
            messagesContainer.style.display = 'block';
        }
        
        // Add user message
        addMessage(messageText, 'user-message');
        userInput.value = '';
        
        // Simulate bot response (for demo purposes)
        setTimeout(() => {
            addMessage('Thanks for your message! How can I assist you further?', 'bot-message');
        }, 1000);
    }
    
    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight;
    }
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
