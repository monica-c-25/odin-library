let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(formDataObj) {
    let title = formDataObj.title;
    let author = formDataObj.author;
    let pages = formDataObj.pages;
    let read = formDataObj.option;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(myLibrary);
    closeForm();
    clearForm();
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {

        let row = document.createElement('tr');
        row.classList.add('container'); 
        table = document.getElementById('table');
        table.appendChild(row);

        let values = Object.values(myLibrary[i]).forEach(val => {
            td = document.createElement('td');
            td.innerText = val;
            row.appendChild(td);}
            )

        /* for (const key in myLibrary[i]) {
            td = document.createElement('td');
            let info = myLibrary[i];
            td.innerText = values;
            row.appendChild(td); 
        } */
    }
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

const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target)

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    addBookToLibrary(formDataObj);
})
