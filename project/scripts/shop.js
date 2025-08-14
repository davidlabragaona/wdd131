const purchase = document.querySelector('#fish-purchase');

const fishList = [
    {
        type: "gold",
        name: "GoldFish",
        aka: "Carassius auratus",
        desc: "Goldfish are messy eaters and produce a lot of waste, so they need strong filtration. They can live 10–20+ years with proper care.",
        img: "images/fish1.webp"
    },
    {
        type: "clown",
        name: "Clownfish",
        aka: "Amphiprion ocellaris",
        desc: "Symbiotic with sea anemones in the wild, but can be kept without them in captivity. Popularized by the film Finding Nemo.",
        img: "images/fish2.webp"
    },
    {
        type: "cardinal",
        name: "Banggai Cardinalfish",
        aka: "Pterapogon kauderni",
        desc: "Peaceful, slow-moving fish; males brood eggs in their mouths. Endangered in the wild due to over-collection.",
        img: "images/fish3.webp"
    },
]

purchase.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        saveData(e.target['id']);
    }
});

function loadList() {
    const list = document.querySelector('#fishlist');
    fishList.forEach( x => {
        const el = document.createElement('div');
        el.innerHTML = `<img src="${x.img}" width="300" alt="${x.name}"><p>${x.desc}</p><button id="${x.type}">Buy</button>`;
        list.appendChild(el);
    });
}

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

loadList();