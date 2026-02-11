const myLibrary = [];

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

  for (const book of myLibrary) {
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

    unreadBookContainer.appendChild(bookCard);
  }
}

const unreadBookContainer = document.querySelector(".unread-book-container");

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

let bookList = [book1, book2];

for (const book of bookList) {
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

  unreadBookContainer.appendChild(bookCard);
}
