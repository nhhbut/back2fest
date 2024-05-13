function filterTickets(option) {
    const cards = document.querySelectorAll('.ticket-card');
    const container = document.querySelector('.ticket-cards');
    let visibleCount = 0;


    document.querySelectorAll('.invisible-card').forEach(card => card.remove());

    cards.forEach(card => {
        const campingType = card.getAttribute('data-camping');
        if ((option === 'avec-camping' && campingType !== 'avec-camping') ||
            (option === 'sans-camping' && campingType !== 'sans-camping')) {
            card.style.display = 'none'; 
        } else {
            card.style.display = 'block';
        }
    });

    
    const totalCards = cards.length;
    const visibleCards = document.querySelectorAll('.ticket-card:not(.invisible-card)').length;
    const remainingVisible = visibleCount % 4;
    const remainingInvisible = (4 - remainingVisible) % 4;

    if (remainingInvisible > 0 && visibleCards < totalCards) {
        for (let i = 0; i < remainingInvisible; i++) {
            const invisibleCard = document.createElement('div');
            invisibleCard.classList.add('ticket-card', 'invisible-card');
            container.parentNode.insertBefore(invisibleCard, container.nextSibling);
        }
    }
}
