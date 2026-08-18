const textContainer = document.getElementById('text-container');
const message = "Hola cómo estás";

// Split message into words and add each with a delay
message.split(' ').forEach((word, index) => {
    setTimeout(() => {
        textContainer.textContent += `${word} `;
    }, index * 200);
});

// Start animation after all words are displayed
setTimeout(() => {
    textContainer.classList.add('animate');
}, message.split(' ').length * 200);