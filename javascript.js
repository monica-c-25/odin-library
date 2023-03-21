let myLibrary= [
    {title:'Holes', author:'Louis Sachar', pages:272, read: 'Yes'}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let info = myLibrary[i];

        let row = document.createElement('tr');
        row.classList.add('container'); 
        table = document.getElementById('table');
        table.appendChild(row);

        for (const key in info) {
            td = document.createElement('td');
            td.innerText = info[key]
            row.appendChild(td);
        }
    }
}


displayBook();
function openForm() {
    document.getElementById('form').style.display = 'block';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';
}

const form = document.querySelector('[name="form]');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    return 
})
