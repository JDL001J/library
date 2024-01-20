


const libraryContainer = document.querySelector("#library");

const myLibrary = [];
// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
 
};
// adding book to library
function addBook(){
title = document.querySelector("#title").value;
author = document.querySelector("#title").value;
pages = document.querySelector("#pages").value;
read = document.querySelector("#read").value;
  book = new Book(title, author, pages, read);
  myLibrary.push(book)
console.log(myLibrary)
}


// login fro display with modal

const dialog = document.querySelector("#dialog");

const loginForm = document.querySelector("#book-sub");

loginForm.addEventListener("submit", (e) => {

  e.preventDefault();
  addBook()
  renderLibrary()
 
});
// populating dom

// need function tp clear library before populatig it

// render --  how to render without havign duplicates
function renderLibrary(){

}


// modal show and close
const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
dialog.showModal()
});

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", ()=>{
    dialog.close()
    });


 




















