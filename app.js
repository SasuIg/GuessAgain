document.addEventListener('DOMContentLoaded', function() { 
    const sections = document.querySelectorAll('.section');
    const startGameButton = document.getElementById('start'); 
    const Guess1btn = document.getElementById('guess');
    const Guess2btn = document.getElementById('guess-again-w'); 
    const Guess3btn = document.getElementById('guess-again-w2'); 
    const inputBoxes = document.querySelectorAll('.inputbox-a, .inputbox-w, .inputbox-w2');
    const restartButtons = document.querySelectorAll('.guess-again-w3, .guess-again-r');

    let correctAnswer = Math.floor(Math.random() * 100) + 1;

    function showSection(sectionID) { 
        sections.forEach(section => section.style.display = 'none'); 
        document.getElementById(sectionID).style.display = 'inherit'; 
    }

    function restartGame() {
        correctAnswer = Math.floor(Math.random() * 100) + 1; 
        showSection('welcome');
    }

    function validateInput(inputBox) {
        const value = parseInt(inputBox.value);
        const min = parseInt(inputBox.getAttribute('min'));
        const max = parseInt(inputBox.getAttribute('max'));
        if (isNaN(value) || value < min || value > max) {
            alert('Please enter a valid number between ' + min + ' and ' + max + '.');
            return false;
        }
        return true;
    }

    startGameButton.addEventListener('click', () => showSection('play')); 

    Guess1btn.addEventListener('click', () => { 
        const inputBox = document.getElementById('inputbox-a');
        if (!validateInput(inputBox)) return;

        const guess1 = parseInt(inputBox.value);
        if (guess1 === correctAnswer) {
            document.getElementById('guess4display').textContent = guess1; // Display the correct guess
            showSection('right'); 
        } else {
            document.getElementById('guess1display').textContent = guess1; 
            showSection('wrong_1'); 
        }
    });

    Guess2btn.addEventListener('click', () => { 
        const inputBox = document.getElementById('inputbox-w');
        if (!validateInput(inputBox)) return;

        const guess2 = parseInt(inputBox.value);
        if (guess2 === correctAnswer) { 
            document.getElementById('guess4display').textContent = guess2; // Display the correct guess
            showSection('right'); 
        } else {
            document.getElementById('guess2display').textContent = guess2; 
            showSection('wrong_2'); 
        }
    });

    Guess3btn.addEventListener('click', () => { 
        const inputBox = document.getElementById('inputbox-w2');
        if (!validateInput(inputBox)) return;

        const guess3 = parseInt(inputBox.value);
        if (guess3 === correctAnswer) { 
            document.getElementById('guess4display').textContent = guess3; // Display the correct guess
            showSection('right'); 
        } else {
            document.getElementById('guess3display').textContent = guess3; 
            showSection('wrong_3'); 
        }
    });
    
    restartButtons.forEach(button => {
        button.addEventListener('click', restartGame);
    });

    showSection('welcome'); 
});
