
const deck = document.querySelector("#deck");




myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title}`
    }
}



function addBookToLibrary(book){
    myLibrary.push(book);

  

}


function displayLibrary(){
    myLibrary.forEach(card => {
        card = document.createElement("div");
        card.classList.add("card");
        text = document.createTextNode('title');
        card.appendChild(text)
        deck.appendChild(card);
    });
}


book1 = new Book("1984","Orwell", 300, "read");
book2 = new Book("Fahrenheit 451", "Bradbury", 300, "read");
addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(book1.info)
displayLibrary()



