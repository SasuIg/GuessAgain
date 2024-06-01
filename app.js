document.addEventListener('DOMContentLoaded', function() { 
    const sections = document.querySelectorAll('.section');
	const startGameButton = document.getElementById('start'); 
	const Guess1btn = document.getElementById('guess');
	const Guess2btn = document.getElementById('guess-again-w'); 
	const Guess3btn = document.getElementById('guess-again-w2'); 
	const restartButtons = document.querySelectorAll('.guess-again-w3, .guess-again-r');

    let correctAnswer = Math.floor(Math.random() * 100) + 1;

    function showSection(sectionID) { 
    	sections.forEach(section => section.style.display = 'none');
    	document.getElementById(sectionID).style.display = 'block'; 
	}

	function restartGame() {
    	correctAnswer = Math.floor(Math.random() * 100) + 1; 
        showSection('welcome');
	}

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

    // Add event listener for restart buttons
    restartButtons.forEach(button => {
        button.addEventListener('click', restartGame);
    });
});
















// document.addEventListener('DOMContentLoaded', function() { 
//     const sections = document.querySelectorAll('.section');
// 	const startGameButton = document.getElementById('.start'); 
// 	const Guess1btn = document.getElementById('.guess');
// 	const Guess2btn = document.getElementById('.guess-again-w'); 
// 	const Guess3btn = document.getElementById('.guess-again-w2'); 
// 	const restartGame = document.querySelectorAll('.guess-again-w3, .guess-again-r');

//     let correctAnswer = Math.floor(Math.random() * 100) + 1;

//     function showSection(sectionID) { 
//     	sections.forEach(section => section.style.display = 'none');
//     	document.getElementById(sectionID).style.display = 'block'; 
// 	}
// 	function restartGame() {
//     	correctAnswer = Math.floor(Math.random() * 100) + 1; 
//         showSection('welcome');
// 	}
//     startGameButton.addEventListener('click', () => showSection('play')); 

// 	Guess1btn.addEventListener('click', () => { 
//         const guess1 = parseInt(document.getElementById('inputbox-a').value); 
//     if (guess1 === correctAnswer) {
//         showSection('right'); 
//     } else {
//         document.getElementById('guess1display').textContent = guess1; 
//         showSection('wrong_1'); 
//     }
// });

// Guess2btn.addEventListener('click', () => { 
//     const guess2 = parseInt(document.getElementById('inputbox-w').value); 
//     if (guess2 === correctAnswer) { 
//         showSection('right'); 
//     } else {
//         document.getElementById('guess2display').textContent = guess2; s
//         showSection('wrong_2'); 
//     }
// });

// Guess3btn.addEventListener('click', () => {
//     const guess3 = parseInt(document.getElementById('inputbox-w2').value); 
//     if (guess3 === correctAnswer) {
//         showSection('right'); 
//     } else {
//         document.getElementById('guess3Display').textContent = guess3; 
//         showSection('wrong_3'); 
//     }
// });
// restartGame.forEach(button => button.addEventListener('click', restartGame));
// showSection('welcome'); 
// });

