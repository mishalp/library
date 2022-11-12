import { addData, readData, updateData, removeData } from "./dataHandler";
import { auth } from "../firebase";





export const script = (()=>{
    const container = document.getElementById('list');

let myLibrary = [];
auth.onAuthStateChanged((user)=>{
    if(user){
        readData()
        .then((data)=>{
            myLibrary = data;
            console.log(data);
            displayBook();
        })
    }
})
console.log('hii');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

 const addBook = ()=>{
    console.log('jii');
   var title = document.getElementById('title').value;
   var author = document.getElementById('author').value;
   var pages = document.getElementById('pages').value;
    var isRead = document.getElementById('readit').value
    if(title == '' || author == '' || pages == ''){
        alert("fields Cannot be empty!!")
        return;
    }
    const book = new Book(title, author, pages, isRead);
    addData({...book})
    myLibrary.push(book);
    
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""

    displayBook()
}

function displayBook() {
    
    container.innerHTML =""
    myLibrary.forEach((book, data) => {
        let div = document.createElement('div');
        var remove = document.createElement('button')
        var btnDiv = document.createElement('div');
        var read = document.createElement('button')
        read.classList.add('read')
        remove.classList.add('remove')
        read.innerHTML = book.read
        remove.innerHTML = "remove";
        div.classList.add('card');
         book.index = data;
         remove.setAttribute('data-index', `${book.index}`)
         read.setAttribute('data-index', `${book.index}`)
        div.innerHTML = `<h2>${book.title}</h2> by <h3>${book.author}</h3><p>${book.pages} Pages`
        btnDiv.appendChild(remove)
        btnDiv.appendChild(read)
        div.appendChild(btnDiv)
        container.appendChild(div);
    });
    btnListen()
    
}

function btnListen(){
    const btnRemove = document.querySelectorAll('.remove');
    btnRemove.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        removebtn(e.path[0].dataset.index);
    })
   })

   const readbtns = document.querySelectorAll('.read');
   readbtns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        toggle(e.path[0].dataset.index, btn.innerHTML)
    })
   })
}

function toggle(index, read){
    if(read == 'readed'){
        myLibrary[index].read = "Not readed";
        updateData(myLibrary[index].id, "Not readed")
    }else{
        myLibrary[index].read = "readed";
        updateData(myLibrary[index].id, "readed")
    }
    displayBook()
    
}

function removebtn(data){
    removeData(myLibrary[data].id)
    myLibrary.splice(data,1);
     displayBook()
}
return { addBook }

})()