//Book class: Represents a book 
class Book {
    constructor(title, author, isbn){
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}

// UI class: Handle UI tasks
class UI {
    static displayBooks(){
        const storedBooks = [

            {
                title: 'Book one',
                author: 'John Doe',
                isbn: '3543'

            },

            {
                title: 'Book one',
                author: 'John Doe',
                isbn: '3548973'

            },

            {
                title: 'Book one',
                author: 'John Doe',
                isbn: '354893'

            },
            
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>       
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields(){
            document.querySelector('#title').value = '';
            document.querySelector('#author').value = '';
            document.querySelector('#isbn').value = '';
    }
}

//Store class: Handles storage


//Event: Display storage

document.addEventListener('DOMContentLoaded', UI.displayBooks);


//Event: Add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {


    //Prevent actual submit 
    e.preventDefault();


    //Get form values 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instantiate book

    const book = new Book(title, author, isbn);

    //Add book to UI
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();
});


// Event: Remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});