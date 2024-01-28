let episodesCards = document.querySelectorAll('.episodes-card');
const viewAllButton = document.querySelector('.view-all--btn');
const gearsButton = document.querySelector('.gear--btn');
const tipsTricksButton = document.querySelector('.tips-tricks--btn');


viewAllButton.onclick = function () {
    viewAllButton.classList.add('btn--active')
    gearsButton.classList.remove('btn--active')
    tipsTricksButton.classList.remove('btn--active')
    for (card of episodesCards) {
        card.style.display = 'flex';
    }
}

gearsButton.onclick = function () {
    viewAllButton.classList.remove('btn--active')
    gearsButton.classList.add('btn--active')
    tipsTricksButton.classList.remove('btn--active')
    for (card of episodesCards) {
        const category = card.querySelector('.episodes-card__category').textContent;
        if (category !== 'Gear') {
            card.style.display = 'none';
        } else {
            card.style.display = 'flex';
        }
    }
}

tipsTricksButton.onclick = function () {
    viewAllButton.classList.remove('btn--active')
    gearsButton.classList.remove('btn--active')
    tipsTricksButton.classList.add('btn--active')
    for (card of episodesCards) {
        const category = card.querySelector('.episodes-card__category').textContent;
        if (category !== 'Tips & Tricks') {
            card.style.display = 'none';
        } else {
            card.style.display = 'flex';
        }
    }
}
