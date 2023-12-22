
const deck = document.querySelector("#deck");




myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title} is by ${this.author} and is ${this.pages} pages long and is ${this.read}`
    }
}



function addBookToLibrary(book){
    myLibrary.push(book);
    displayLibrary()
}

function clearDeck(){
    while (deck.firstChild) {
        deck.removeChild(deck.lastChild);
      }
    }


function displayLibrary(){
    clearDeck()
        myLibrary.forEach((elm, i) => {
        card = document.createElement("div");
        card.classList.add("card");
        info = elm.info();
        text = document.createTextNode(`${i + 1} ${info}`);
        card.appendChild(text)
        deck.appendChild(card);
    });
}

function createCard(book){

}


book1 = new Book("1984","Orwell", 300, "read");
book2 = new Book("Fahrenheit 451", "Bradbury", 300, "read");
book3 = new Book("sadfdfas", "jon", 300, "not read");
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);




  
  



