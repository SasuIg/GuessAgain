document.addEventListener('DOMContentLoaded', function() { 
    const sections = document.querySelectorAll('.section');
    const startGameButton = document.getElementById('start'); 
    const Guess1btn = document.getElementById('guess');
    const Guess2btn = document.getElementById('guess-again-w'); 
    const Guess3btn = document.getElementById('guess-again-w2'); 
    const inputBoxes = document.querySelectorAll('#inputbox-a, #inputbox-w, #inputbox-w2');
    const restartButtons = document.querySelectorAll('.guess-again-w3, .guess-again-r');
    const numberInputs = document.querySelectorAll('input[type="number"]');

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

        if (value < min || value > max) {
            inputBox.value = Math.min(Math.max(value, min), max);
            alert('Please enter a number between ' + min + ' and ' + max + '.');
            return false;
        }
        return true;
    }

    function updateGuessButtons() {
        const isValid = Array.from(inputBoxes).every(inputBox => validateInput(inputBox));
        Guess1btn.disabled = !isValid;
        Guess2btn.disabled = !isValid;
        Guess3btn.disabled = !isValid;
    }

    inputBoxes.forEach(inputBox => {
        inputBox.addEventListener('input', function(event) {
            const value = parseInt(this.value);
            const min = parseInt(this.getAttribute('min'));
            const max = parseInt(this.getAttribute('max'));
            const sectionID = this.getAttribute('data-section');

            if (value < min || value > max || isNaN(value)) {
                event.preventDefault(); // Prevent the default button click behavior
                this.value = ''; // Clear the input field
                alert('Please enter a valid number between ' + min + ' and ' + max + '.');
            }
        });
    });

    numberInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Remove non-numeric characters from input value
            this.value = this.value.replace(/\D/g, '');
        });
    });
    startGameButton.addEventListener('click', () => {
        showSection('play');
        updateGuessButtons();
    }); 

    Guess1btn.addEventListener('click', () => { 
        const guess1 = parseInt(document.getElementById('inputbox-a').value); 
        if (guess1 === correctAnswer) {
            showSection('right'); 
        } else {
            document.getElementById('guess1display').textContent = guess1; 
            showSection('wrong_1'); 
        }
    });

    Guess2btn.addEventListener('click', () => { 
        const guess2 = parseInt(document.getElementById('inputbox-w').value); 
        if (guess2 === correctAnswer) { 
            showSection('right'); 
        } else {
            document.getElementById('guess2display').textContent = guess2; 
            showSection('wrong_2'); 
        }
    });

    Guess3btn.addEventListener('click', () => { 
        const guess2 = parseInt(document.getElementById('inputbox-w2').value); 
        if (guess2 === correctAnswer) { 
            showSection('right'); 
        } else {
            document.getElementById('guess3display').textContent = guess2; 
            showSection('wrong_3'); 
        }
    });
    
     restartButtons.forEach(button => {
        button.addEventListener('click', restartGame);
    });

    document.getElementById('right').addEventListener('transitionend', () => {
        if (lastGuess !== undefined) {
            document.getElementById('guess4display').textContent = lastGuess;
        }
    });

    showSection('welcome'); 
});