const myLibrary = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(addedBook) {
    myLibrary.push(addedBook)
}

let library = document.querySelector('.library-container')

let liamsAdventures = new Book('liams adventures', 'liam', '324')
let samsAdventures = new Book('sams adventures', 'sam', "202")
addBookToLibrary(liamsAdventures)
addBookToLibrary(samsAdventures)

let displayBooks = function () {
    //remove all old books in order to properly reload
    library.innerHTML = ''

    //Creating all books inside the area
    let books = myLibrary.map(function (book, index) {

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
        let bookPages = document.createElement('p')
        bookPages.textContent = book.pages

        // Read button
        let readButton = document.createElement('button')
        readButton.textContent = 'Read'
        readButton.style.backgroundColor = 'darkred'

        //removeButton
        let removeButton = document.createElement('button')
        removeButton.textContent = 'Remove'

        // myLibrary.forEach()
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1)
            displayBooks()
        })

        readButton.addEventListener('click', () => {
            if (readButton.style.backgroundColor == 'darkred') {
                readButton.style.backgroundColor = 'green'
            } else {
                readButton.style.backgroundColor = 'darkred'
            }
        })

        // Appending all elements
        newBook.appendChild(bookTitle)
        newBook.appendChild(bookAuthor)
        newBook.appendChild(bookPages)
        newBook.appendChild(readButton)
        newBook.appendChild(removeButton)

        return newBook
    })

    // Displaying every created book
    books.forEach(function (book) {
        library.appendChild(book)
    })
}

// books.
displayBooks()


let titleInput = document.getElementById('title')
let authorInput = document.getElementById('author')
let pagesInput = document.getElementById("pages")

let cancelButton = document.getElementById('cancel-button')
let createButton = document.getElementById('create-button')

let clearValues = function () {
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
}

// Remove non-numeric characters using a regular expression
pagesInput.addEventListener("input", function () {
    pagesInput.value = pagesInput.value.replace(/\D/, '');
});

createButton.addEventListener('click', () => {
    if (titleInput.value.trim() !== "" && authorInput.value.trim() !== "" && pagesInput.value.trim() !== "") {
        let userAddedBook = new Book(titleInput.value, authorInput.value, pagesInput.value)
        addBookToLibrary(userAddedBook)
        console.log(myLibrary)
        displayBooks()
        clearValues()

    }
})

let toggleNewBookMenu = document.getElementById('toggle-new-book-menu')
toggleNewBookMenu.addEventListener('click', () => {
    clearValues()
    let newBookMenuContainer = document.getElementById('new-book-menu-container')
    if (newBookMenuContainer.style.display === "none") {
        // If it's currently hidden, make it visible
        newBookMenuContainer.style.display = "flex"; // or "inline", "flex", etc. depending on your layout
        console.log('asda')
    } else {
        // If it's currently visible, hide it
        newBookMenuContainer.style.display = "none";
    }
})

displayBooks()