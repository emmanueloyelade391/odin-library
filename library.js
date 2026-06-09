let myLibrary = [];

function Book(title, author, pages, status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status; 
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  const bookCard = document.createElement("div");
  bookCard.classList = "book-card";

  const bookTitle = document.createElement("p");
  bookTitle.classList = "title";
  bookTitle.textContent = myLibrary.at(-1).title;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.classList = "author";
  bookAuthor.textContent = myLibrary.at(-1).author;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.classList = "pages";
  bookPages.textContent = myLibrary.at(-1).pages;
  bookCard.appendChild(bookPages);

  const bookCompleted = document.createElement("p");
  bookCompleted.classList = "completed";
  bookCompleted.textContent = myLibrary.at(-1).status;
  bookCard.appendChild(bookCompleted);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList = "deleteBtn";
  deleteBtn.textContent = "Delete book";
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  bookCard.appendChild(deleteBtn);

  if (myLibrary.at(-1).status == "Read") {
    readBookContainer.appendChild(bookCard);
  } else {
    unreadBookContainer.appendChild(bookCard);
  }
}

const unreadBookContainer = document.querySelector(".unread-book-container");
const readBookContainer = document.querySelector(".read-book-container");

const addBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const cancelBtn = document.querySelector(".cancel-btn");
const acceptBtn = document.querySelector(".accept-btn");
const formDialog = document.querySelector("#form-dialog");

addBookBtn.addEventListener("click", (e) => {
  formDialog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
  formDialog.close();
});

acceptBtn.addEventListener("click", (e) => {
  const inputTitle = document.querySelector("#title");
  const inputAuthor = document.querySelector("#author");
  const inputPages = document.querySelector("#pages");
  const inputStatus = document.querySelector("#status");

  if (( inputTitle.value != "") &&
      ( inputAuthor.value != "") &&
      ( inputPages.value != "") 
    ) {
    e.preventDefault();

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

  unreadBookContainer.appendChild(bookCard);
}