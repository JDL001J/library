
const deck = document.querySelector("#deck");
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `Title: ${this.title}
                 Author: ${this.author}  
                 Pages: ${this.pages} 
                 Read?: ${isRead(this.read)}`
    }
}

function isRead(read){
    if (read == "on"){
        return "read"
    }
    else if(read == null){
        return "not read"
    }
}


function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const title = data.get('title');
    const author = data.get('author');
    const pages = data.get('pages');
    const read = data.get('read');
    const book =  new Book(title, author, pages, read);
    addBookToLibrary(book);
    clearForm()
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
        text = document.createTextNode(`${info}`);
        img = addDeleteBtn(i);
        card.appendChild(text)
        card.appendChild(img);
        deck.appendChild(card);
    });
}

function addDeleteBtn(i){
    img = document.createElement('img');
    img.src="./images/trash-bin-trash-svgrepo-com.svg";
    img.classList.add("trash")
    img.addEventListener('click', ()=>{
        delete myLibrary[i];
        displayLibrary()} ) ;
    return img
}

function clearForm(){
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
}


// book = new Book("1984","Orwell", 300, "yes" );
// addBookToLibrary(book)
// book = new Book("1984","Orwell", 300, "yes" );
// addBookToLibrary(book)
// book = new Book("1984","Orwell", 300, "yes" );
// addBookToLibrary(book)
// book = new Book("1984","Orwell", 300, "yes" );
// addBookToLibrary(book)
// book = new Book("1984","Orwell", 300, "yes" );
// addBookToLibrary(book)







