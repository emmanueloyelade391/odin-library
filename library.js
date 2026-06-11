// An array that holds all the book objects in the program.
let myLibrary = [];

// An object constructor that let's users create their own books.
function Book(title, author, pages, status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status; 
}

/* A function available to every book made with the book constructor,
   which allows users to change the status of a book on the page. */
Book.prototype.toggleBook = function(checkBox) {
  if (checkBox.checked == true) {
    readBookContainer.appendChild(checkBox.parentElement);
  } else {
    unreadBookContainer.appendChild(checkBox.parentElement);
  }
};

/* Creates a container to hold an added book's information and adds
   it to the read books container or the unread books container
   depending on the added book's status. */
function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  const bookCard = document.createElement("div");
  bookCard.classList = "book-card";

  const bookTitle = document.createElement("p");
  bookTitle.classList = "title";
  bookTitle.textContent = newBook.title;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.classList = "author";
  bookAuthor.textContent = newBook.author;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.classList = "pages";
  bookPages.textContent = newBook.pages;
  bookCard.appendChild(bookPages);

  const bookCompleted = document.createElement("p");
  bookCompleted.classList = "completed";
  bookCompleted.textContent = newBook.status;
  bookCard.appendChild(bookCompleted);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList = "deleteBtn";
  deleteBtn.textContent = "Delete book";
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  bookCard.appendChild(deleteBtn);

  const toggleStatusBtn = document.createElement("input");
  toggleStatusBtn.id = "toggleStatusBtn";
  toggleStatusBtn.classList = "toggleStatusBtn";
  toggleStatusBtn.type = "checkbox";
  toggleStatusBtn.name = "toggleStatus";
  toggleStatusBtn.addEventListener("click", (event) => {
    newBook.toggleBook(event.target);
  });

  if (myLibrary.at(-1).status == "Read") {
    toggleStatusBtn.checked = true;
    bookCard.appendChild(toggleStatusBtn);
    readBookContainer.appendChild(bookCard);
  } else {
    bookCard.appendChild(toggleStatusBtn);
    unreadBookContainer.appendChild(bookCard);
  }
}

/* Get a reference to the unread book container and the read book container. 
   to edit them. */
const unreadBookContainer = document.querySelector(".unread-book-container");
const readBookContainer = document.querySelector(".read-book-container");

// Get a reference to these pre-made elements to edut them. 
const addBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const cancelBtn = document.querySelector(".cancel-btn");
const acceptBtn = document.querySelector(".accept-btn");
const formDialog = document.querySelector("#form-dialog");

// Display the form inside a modal when clicked.
addBookBtn.addEventListener("click", () => {
  formDialog.showModal();
});

// Hide the form inside the modal when clicked.
cancelBtn.addEventListener("click", () => {
  formDialog.close();
});

/*Submit the form and use the inputted data to create a book 
  and display it on the webpage. */
acceptBtn.addEventListener("click", (event) => {
  const inputTitle = document.querySelector("#title");
  const inputAuthor = document.querySelector("#author");
  const inputPages = document.querySelector("#pages");
  const inputStatus = document.querySelector("#status");

  if (( inputTitle.value != "") &&
      ( inputAuthor.value != "") &&
      ( inputPages.value != "") 
    ) {
    event.preventDefault();

    if (inputStatus.checked) {
    inputStatus.value = "Read";
    } else {
      inputStatus.value = "Not read";
    }
    
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value);
    addBookForm.reset();
    formDialog.close();
  }
}); 

// Premade books to show the user how books look on this webpage.
const book1 = {
  id: crypto.randomUUID(),
  title: "A book",
  author: "John Doe",
  pages: 100,
  completed: "Not read",
};

const book2 = {
  id: crypto.randomUUID(),
  title: "Another book",
  author: "John Doe",
  pages: 200,
  completed: "Read",
};

myLibrary.push(book1);
myLibrary.push(book2);

for (let book of myLibrary) {
  const bookCard = document.createElement("div");
  bookCard.classList = "book-card";

  const title = document.createElement("p");
  title.classList = "title";
  title.textContent = book.title;
  bookCard.appendChild(title);

  const author = document.createElement("p");
  author.classList = "author";
  author.textContent = book.author;
  bookCard.appendChild(author);

  const pages = document.createElement("p");
  pages.classList = "pages";
  pages.textContent = book.pages;
  bookCard.appendChild(pages);

  const completed = document.createElement("p");
  completed.classList = "completed";
  completed.textContent = book.completed;
  bookCard.appendChild(completed);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList = "deleteBtn";
  deleteBtn.textContent = "Delete book";
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  bookCard.appendChild(deleteBtn);

  const toggleStatusBtn = document.createElement("input");
  toggleStatusBtn.id = "toggleStatusBtn";
  toggleStatusBtn.classList = "toggleStatusBtn";
  toggleStatusBtn.type = "checkbox";
  toggleStatusBtn.name = "toggleStatus";
  toggleStatusBtn.addEventListener("click", (event) => {
    if (event.target.checked) {
      readBookContainer.appendChild(event.target.parentElement);
    } else {
      unreadBookContainer.appendChild(event.target.parentElement);
    }
  });
  bookCard.appendChild(toggleStatusBtn);

  unreadBookContainer.appendChild(bookCard);
}