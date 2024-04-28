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


//Displaying array of books
let books = myLibrary.map(function (book) {
    // Create a newbook with the 'book' class
    const newBook = document.createElement('div')
    newBook.classList.add('book')

    // Adding title to the element
    let bookTitle = document.createElement('p')
    bookTitle.textContent = book.title

    // Adding author to the element
    let bookAuthor = document.createElement('p')
    bookAuthor.textContent = book.author

    // Adding publisher to the element
    let bookPublisher = document.createElement('p')
    bookPublisher.textContent = book.publisher
    
    // Read button
    let readButtonContainer = document.createElement('div')
    readButtonContainer.style.display = 'flex'
    readButtonContainer.style.flexDirection = 'row'

    let readButton = document.createElement('input')
    readButton.setAttribute('type', 'checkbox')
    let readButtonText  = document.createElement('p')
    readButtonText.textContent = 'read?'

    // Appending to readbutton
    readButtonContainer.appendChild(readButton)
    readButtonContainer.appendChild(readButtonText)

    // remove button
    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'

    // Appending all elements
    newBook.appendChild(bookTitle)
    newBook.appendChild(bookAuthor)
    newBook.appendChild(bookPublisher)
    newBook.appendChild(readButtonContainer)
    newBook.appendChild(removeButton)




    return newBook
})

books.forEach(function (book) {
    library.appendChild(book)
})


console.log(myLibrary)