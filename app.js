document.addEventListener('DOMContentLoaded', function() { 
    const sections = document.querySelectorAll('.section');
	const startGameButton = document.getElementById('.start'); 
	const Guess1 = document.getElementById('.guess');
	const Guess2 = document.getElementById('.guess-again-w'); 
	const Guess3 = document.getElementById('.guess-again-w2'); 
	const restartGameButtons = document.querySelectorAll('.guess-again-w3, .guess-again-r');

    let correctAnswer = Math.floor(Math.random() * 100) + 1;

    function showSection(sectionId) { 
    	sections.forEach(section => section.style.display = 'none');
    	document.getElementById(sectionId).style.display = 'block'; 
	}
	function restartGame() {
    	correctAnswer = Math.floor(Math.random() * 100) + 1; 
        showSection('welcome');
	}
    startGameButton.addEventListener('click', () => showSection('play')); 

	Guess1.addEventListener('click', () => { 
        const guess1 = parseInt(document.getElementById('inputbox-a').value); 
    if (guess1 === correctAnswer) {
        showSection('right'); 
    } else {
        document.getElementById('guess1Display').textContent = guess1; 
        showSection('section3'); // Show the section for the first incorrect guess
    }
});
