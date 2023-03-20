let myLibrary= ['cat', 'dog', 'bunny'];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return [author, title, pages, read]
    }
    addBookToLibrary(this.info);
}

function addBookToLibrary() {
    myLibrary.push(this.info);
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = myLibrary[i];
        document.body.appendChild(div);
    }
}

function openForm() {
    document.getElementById('form').style.display = 'block';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';
}
