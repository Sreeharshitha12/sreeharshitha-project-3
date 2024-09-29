document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#vote-section button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You voted for ${button.textContent}`);
        });
    });
});
