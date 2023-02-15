console.log("Welcome to IET Library");

//Constructor to adding the Books
function Book(givenName, givenAuthor, givenType) {
    this.name = givenName;
    this.author = givenAuthor;
    this.type = givenType;
}

// Function to display the books in Table 
function Display() {

}

Display.prototype.add = function (book) {
    let table = document.getElementById('tableRow');
    let str = ` <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>`
    table.innerHTML += str;

}

Display.prototype.clear = function () {
    console.log("hit the Clear");
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length > 3) {
        return true;
    }
    else
        return false;
}

Display.prototype.typeError = function (type, message) {
    let givenMessage = document.getElementById("message");
    
        givenMessage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Messge:</strong> ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`

    setTimeout(() => {
        givenMessage.innerHTML="";
        
    }, 2000);
    
   
}

Display.prototype.show = function (e) {
    let name=document.getElementById("bookName").value;
    let author=document.getElementById("author").value;
    let items=localStorage.getItem('items');
    if(items==null){
         itemsObj=[];
    }
   
     itemsObj=JSON.parse(items);
    // itemsObj.push(name,author);
    console.log(name,author);
    localStorage.setItem('items',JSON.stringify(itemsObj));
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Form Submitted");
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.typeError('success', 'Your book has been successfully added');
    }
    else
    display.typeError('danger', 'Sorry you cannot add this book');// info-blue, danger-red,succes-green etc;
    display.show();
}

