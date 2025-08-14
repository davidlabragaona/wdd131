const purchase = document.querySelector('#fish-purchase');

purchase.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        saveData(e.target['id']);
    }
});

function saveData(fish) {
    let data = getFishData();
    if (fish === 'gold')
        data['gold']++;
    else if (fish === 'clown')
        data['clown']++;
    else
        data['cardinal']++;
    localStorage.setItem('fishdata', JSON.stringify(data));
}

function getFishData() {
    let data = localStorage.getItem('fishdata');
    if (data === null)
        return {gold: 0, clown: 0, cardinal: 0};
    else
        return JSON.parse(data);
}