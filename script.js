
class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


class Library{
    constructor(){
        this.container = document.getElementById('list');
        this.myLibrary = [];

        this.displayBook();
    }

    
    addBook() {
       var title = document.getElementById('title').value;
       var author = document.getElementById('author').value;
       var pages = document.getElementById('pages').value;
        var isRead = document.getElementById('readit').value
        if(title == '' || author == '' || pages == ''){
            alert("fields Cannot be empty!!")
            return;
        }
        const book = new Book(title, author, pages, isRead);
        this.myLibrary.push(book);
        
        document.getElementById('title').value = ""
        document.getElementById('author').value = ""
        document.getElementById('pages').value = ""
    
        this.displayBook()
    }
    
    displayBook() {
        
        this.container.innerHTML =""
        this.myLibrary.forEach((book, data) => {
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
            this.container.appendChild(div);
        });
        this.btnListen()
        
    }
    
    btnListen(){
        const btnRemove = document.querySelectorAll('.remove');
        btnRemove.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            this.removebtn(e.composedPath()[0].dataset.index);
        })
       })
    
       const readbtns = document.querySelectorAll('.read');
       readbtns.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            this.toggle(e.composedPath()[0].dataset.index, btn.innerHTML)
        })
       })
    }
    
    toggle(index, read){
        if(read == 'readed'){
            this.myLibrary[index].read = "Not readed"
        }else{
            this.myLibrary[index].read = "readed"
        }
        this.displayBook()
        
    }
    
    removebtn(data){
        this.myLibrary.splice(data,1);
        this.displayBook()
    }
}

let library = new Library()
