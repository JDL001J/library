const myLibrary = [];
// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// creates and returns unique book
function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

document.querySelector("#book-sub").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  renderLibrary();
});
// populating dom

function renderLibrary(book) {
  clearLibrary(document.querySelector("#library"));

  myLibrary.forEach((book, i) => {
    let card = createCard(book, i);

    document.querySelector("#library").appendChild(card);
  });
}

function clearLibrary(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function remove(i) {
  document
    .querySelector("#library")
    .removeChild(document.getElementById(`${i}`));
  myLibrary.splice(i);
}

function createCard(book, i) {
  card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", i);
  btn = document.createElement("button");
  btn.textContent = "remove";
  btn.addEventListener("click", () => {
    remove(i);
  });
  card.appendChild(btn);

  divTitle = document.createElement("div");
  divTitle.textContent = `Title: ${book.title}`;
  card.appendChild(divTitle);
  divAuthor = document.createElement("div");
  divAuthor.textContent = `Author: ${book.author}`;
  card.appendChild(divAuthor);
  divPages = document.createElement("div");
  divPages.textContent = `Pages: ${book.pages}`;
  card.appendChild(divPages);
  divRead = document.createElement("div");
  divRead.textContent = `Have Read?: ${book.read}`;
  card.appendChild(divRead);

  return card;
}

// modal show and close
const dialog = document.querySelector("#dialog");
document.querySelector("#btn").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#close").addEventListener("click", () => {
  dialog.close();
});
