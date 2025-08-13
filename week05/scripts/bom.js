const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
    }
    input.focus();
});

//Event Propagation -> we don't create handlers for every button.
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        e.currentTarget.removeChild(li); //list
        deleteChapter(li.textContent);
        input.focus();
    }
});

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.appendChild(li);
    //input.value = '';
    //input.focus();
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}