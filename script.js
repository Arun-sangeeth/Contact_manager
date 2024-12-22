function confirmDelete (contactName) {
    return confirm(`Are you sure you want to delete ${contactName}?`);
}
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 10px #2575fc'; });
        input.addEventListener('blur', () => {
            input.style.boxShadow ='none';
        });
    });
});
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card. addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});