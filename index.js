let form = document.getElementById('form');
let input = document.getElementById('todo-input');
    
let items = [];

displayLocalStorage();

form.addEventListener('submit', byDefault);
function byDefault(e) {
    e.preventDefault();
    let todoInput = input.value;
    if (todoInput === '') {
        alert("Please enter a valid input!");
    }
    else{
        appendUl(todoInput);
        storingItem(todoInput);
        input.value = '';
        addDeleteFunction(todoInput);
    }
    
}


function appendUl(todoInput) {
    let li = document.createElement('li');
    li.innerHTML = `${todoInput}<input type="button" value="delete" class="delete-item">`;
    let ul = document.getElementById('list');
    ul.appendChild(li);
}
 

function storingItem(item) {
    items.push(item);
    localStorage.setItem('item', JSON.stringify(items));
}

function displayLocalStorage() {
    let storage = localStorage.getItem('item');
    if (storage === null) {
        items = [];
    } 
    else{
        let storageParsed = JSON.parse(storage);
        storageParsed.forEach((storedItem) => {
            appendUl(storedItem);
        })
    }
}



function addDeleteFunction(todoInput) {
    let deleteButton = document.querySelectorAll(".delete-item");
    for(let i=0; i<deleteButton.length; i++){
        deleteButton[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}


