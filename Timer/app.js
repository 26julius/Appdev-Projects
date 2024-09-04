document.addEventListener('DOMContentLoaded', () => {
    const valueElement = document.getElementById('value');
    const startButton = document.querySelector('.btn.start');

    let timer;
    let timeLeft = 30;

    function updateDisplay() {
        valueElement.textContent = timeLeft;
    }

    function startTimer() {
        if (timer) return; // Prevent multiple timers from starting
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                return;
            }
            timeLeft--;
            updateDisplay();
        }, 1000); // Update 
    }

    startButton.addEventListener('click', () => {
        startTimer();
    });

    // display
    updateDisplay();
});
