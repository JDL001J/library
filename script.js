
const dialog = document.querySelector("#dialog");
const closeBtn = document.getElementById("close");
const bookShelf = document.getElementById("library");

const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
 
};

function addBookToLibrary() {
  title = document.getElementById("title");
 author = document.getElementById("author");
book = new Book(title.value, author.value);
myLibrary.push(book)
};

const loginForm = document.querySelector("#book-sub");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
 addBookToLibrary();
 clearShelf();
displayLib();
 
});

function clearShelf(){
  const divs = Array.from(document.querySelectorAll(".card"));

 divs.forEach((elm) =>{
  bookShelf.remove(elm);
 })
 
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
dialog.showModal()
});
closeBtn.addEventListener("click", ()=>{
    dialog.close()
    });


 




// need function tp clear library before populatig it
function displayLib(){
  
  myLibrary.forEach((elm, i)=> {
    card = document.createElement('div');
     card.textContent = `${elm.title}`;
   bookShelf.appendChild(card);
    card.classList.add("card");
   
  });
  console.log(bookShelf);
  console.log(myLibrary)
 
}





