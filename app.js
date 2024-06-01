document.addEventListener('DOMContentLoaded', function() { 
    const sections = document.querySelectorAll('.section');
    const startGameButton = document.getElementById('start'); 
    const Guess1btn = document.getElementById('guess');
    const Guess2btn = document.getElementById('guess-again-w'); 
    const Guess3btn = document.getElementById('guess-again-w2'); 
    const inputBoxes = document.querySelectorAll('#inputbox-a, #inputbox-w, #inputbox-w2');
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

    inputBoxes.forEach(inputBox => {
        inputBox.addEventListener('input', function() {
            const value = parseInt(this.value);
            const min = parseInt(this.getAttribute('min'));
            const max = parseInt(this.getAttribute('max'));

            if (value < min || value > max) {
                this.value = Math.min(Math.max(value, min), max);
                alert('Please enter a number between ' + min + ' and ' + max + '.');
            }
        });
    });

    startGameButton.addEventListener('click', () => showSection('play')); 

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
});

// document.addEventListener('DOMContentLoaded', function() { 
//     const sections = document.querySelectorAll('.section');
// 	const startGameButton = document.getElementById('start'); 
// 	const Guess1btn = document.getElementById('guess');
// 	const Guess2btn = document.getElementById('guess-again-w'); 
// 	const Guess3btn = document.getElementById('guess-again-w2'); 
//     const inputBoxes= document.getElementById('inputbox-a, inputbox-w, inputbox-w2')
// 	const restartButtons = document.querySelectorAll('.guess-again-w3, .guess-again-r');

//     let correctAnswer = Math.floor(Math.random() * 100) + 1;

//     function showSection(sectionID) { 
//     	sections.forEach(section => section.style.display = 'none');
//     	document.getElementById(sectionID).style.display = 'inherit'; 
// 	}

// 	function restartGame() {
//     	correctAnswer = Math.floor(Math.random() * 100) + 1; 
//         showSection('welcome');
// 	}

//     inputBoxes.forEach(inputBox => {
//         inputBox.addEventListener('input', function() {
//             const value = parseInt(this.value);
//             const min = parseInt(this.getAttribute('min'));
//             const max = parseInt(this.getAttribute('max'));
            
//             if (value < min || value > max) {
        
//                 this.value = Math.min(Math.max(value, min), max);
              
//                 alert('Please enter a number between ' + min + ' and ' + max + '.');
            
//             });
//     startGameButton.addEventListener('click', () => showSection('play')); 

// 	Guess1btn.addEventListener('click', () => { 
//         const guess1 = parseInt(document.getElementById('inputbox-a').value); 
//         if (guess1 === correctAnswer) {
//             showSection('right'); 
//         } else {
//             document.getElementById('guess1display').textContent = guess1; 
//             showSection('wrong_1'); 
//         }
//     });

//     Guess2btn.addEventListener('click', () => { 
//         const guess2 = parseInt(document.getElementById('inputbox-w').value); 
//         if (guess2 === correctAnswer) { 
//             showSection('right'); 
//         } else {
//             document.getElementById('guess2display').textContent = guess2; 
//             showSection('wrong_2'); 
//         }
//     });
//     Guess3btn.addEventListener('click', () => { 
//         const guess2 = parseInt(document.getElementById('inputbox-w2').value); 
//         if (guess2 === correctAnswer) { 
//             showSection('right'); 
//         } else {
//             document.getElementById('guess3display').textContent = guess2; 
//             showSection('wrong_3'); 
//         }
//     });
    
//     restartButtons.forEach(button => {
//         button.addEventListener('click', restartGame);
//     });
// });