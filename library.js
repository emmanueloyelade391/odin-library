const book = {
  title: "A book",
  author: "John Doe",
  pages: 100,
  status: "Not Read" 
};

const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const status = document.querySelector(".status");

title.textContent = book.title;
author.textContent = book.author;
pages.textContent = book.pages;
status.textContent = book.status;