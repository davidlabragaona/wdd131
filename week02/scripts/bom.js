const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.appendChild(li);
        input.value = '';
    }
    input.focus();
});

//Event Propagation -> we don't create handlers for every button.
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        e.currentTarget.removeChild(li); //list
        input.focus();
    }
});
