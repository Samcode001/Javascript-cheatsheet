
console.log("This is tutorial 32 - solution")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


class library{
     constructor(givenBookList){
         this.bookList=givenBookList;
     }
     bookList(){
         bookList.forEach(element => {
             console.log(element);
        });
     }
     issueBook(bookName,user){
        
         console.log("Book Issued");
        
     }
     returnBook(bookName){

          if(val=null){
              console.log("Invalid Book");
          }
          else{

              console.log("Book Submitted")
          }
       
     }
 }

 // Harry's Solution -----------------------
 
//  let bookList=["MamaEarth","Utopia","Life","Solar","Nature"];
//  let libraryObj= new library(bookList);
 

//  class Library {
//     constructor(bookList){
//         this.bookList = bookList;
//         this.issuedBooks = {};
//     }

//     getBookList(){
//         this.bookList.forEach(element => {
//             console.log(element);
//         });
//     }

//     issueBook(bookname, user){
//         if (this.issuedBooks[bookname] ==undefined){
//         this.issuedBooks[bookname] =  user;
//         }
//         else{
//             console.log("This book is already issued!");
//         }
//     }

//     returnBook(bookname){
//         delete this.issuedBooks[bookname];
//     }
// }

