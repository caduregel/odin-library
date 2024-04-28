const myLibrary = []

function Book(title, author, publisher) {
    this.title = title
    this.author = author
    this.publisher = publisher
}

function addBookToLibrary(addedBook) {
    myLibrary.push(addedBook)
}

let library = document.querySelector('.library-container')


let book1 = new Book('liams adventures', 'liam', 'spacediaries')
let book2 = new Book('sams adventures', 'sam', 'earthdiaries')
addBookToLibrary(book1)
addBookToLibrary(book2)

let books = myLibrary.map(function(book) {
    // Create a newbook with the 'book' class
    const newBook = document.createElement('div')
    newBook.classList.add('book')

    // Adding title to the element
    let bookTitle = document.createElement('p')
    bookTitle.textContent = book.title

    return newBook
})

books.forEach(function (book) {
    library.appendChild(book)
})


console.log(myLibrary)