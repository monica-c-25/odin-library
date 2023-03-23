// global variables
let myLibrary = [];



// event listeners
const form = document.getElementById("form");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target)

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    addBookToLibrary(formDataObj);
})

const open = document.getElementById('newBook');
open.addEventListener('click', openForm);

const close = document.getElementById('close');
close.addEventListener('click', closeForm);




// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// functions
function addBookToLibrary(formDataObj) {
    let title = formDataObj.title;
    let author = formDataObj.author;
    let pages = formDataObj.pages;
    let read = formDataObj.option;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    let i = myLibrary.pop(-1);
    displayBook(i);
    closeForm();
    clearForm();
}


function displayBook(i) {
        let row = document.createElement('tr');
        row.classList.add('container'); 
        table = document.getElementById('table');
        table.appendChild(row);

        Object.values(i).forEach(val => {
            td = document.createElement('td');
            td.innerText = val;
            row.appendChild(td);}
        )

        let changeStatusCell = document.createElement('td')
        let changeStatusBtn = document.createElement('BUTTON');
        changeStatusBtn.innerHTML = "Change read status";
        changeStatusBtn.setAttribute('id', 'change');
        changeStatusCell.appendChild(changeStatusBtn);
        row.appendChild(changeStatusCell);
        changeStatusBtn.onclick = change; //event listener for dynamically created button

        let removeBtnCell = document.createElement('td');
        let removeBtn = document.createElement('BUTTON');
        removeBtn.innerHTML = "X";
        removeBtn.setAttribute('id', 'remove');
        removeBtnCell.appendChild(removeBtn);  
        row.appendChild(removeBtnCell);
        removeBtn.onclick = removeBook; //event listener for dynamically created button
    }

function openForm() {
    document.getElementById('popup').style.display = 'block';
}

function closeForm() {
    document.getElementById('popup').style.display = 'none';
}

function clearForm() {
    document.getElementById('form').reset();
}

function removeBook() {
    let i = this.parentNode.parentNode.rowIndex;
    console.log(i);
    document.getElementById('table').deleteRow(i)
}

function change() {
    let toggle = this.parentNode.parentNode;
    let change = toggle.cells[3];
    if ((change.innerHTML) === "yes") {
        change.innerHTML = '';
        change.innerHTML += 'no';
    } else {
        change.innerHTML = '';
        change.innerHTML += 'yes';
    }
}