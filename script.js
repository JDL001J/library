// btn = document.getElementById("btn");
dialog = document.querySelector("#dialog");
closeBtn = document.getElementById("close");
libraryDisplay = document.getElementById("library");


btn.addEventListener("click", ()=>{
dialog.showModal()
});
closeBtn.addEventListener("click", ()=>{
    dialog.close()
    });


 const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
};

function displayLib(){
  myLibrary.forEach((elm, i)=> {
    card = document.createElement('div');
   
    card.textContent = `${elm.title}`;
    libraryDisplay.appendChild(card);
    card.classList.add("card");
   
  })
}
displayLib();
book1 = new Book("1984", "Orwell", 300, "yes");
book2 = new Book("1984", "Orwell", 300, "yes");
book3 = new Book("1984", "Orwell", 300, "yes");
myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
displayLib();



