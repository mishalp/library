/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "script": () => (/* binding */ script)
/* harmony export */ });
const script = (()=>{
    const container = document.getElementById('list');

let myLibrary = [];

displayBook();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

 const addBook = ()=>{
   var title = document.getElementById('title').value;
   var author = document.getElementById('author').value;
   var pages = document.getElementById('pages').value;
    var isRead = document.getElementById('readit').value
    if(title == '' || author == '' || pages == ''){
        alert("fields Cannot be empty!!")
        return;
    }
    const book = new Book(title, author, pages, isRead);
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
        myLibrary[index].read = "Not readed"
    }else{
        myLibrary[index].read = "readed"
    }
    displayBook()
    
}

function removebtn(data){
    myLibrary.splice(data,1);
     displayBook()
}
return { addBook }

})()

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");





//add book 
document.getElementById('add-book-btn').addEventListener('click', _script__WEBPACK_IMPORTED_MODULE_0__.script.addBook)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pELDRDQUE0QyxXQUFXO0FBQ3ZELCtCQUErQixXQUFXLGVBQWUsWUFBWSxVQUFVLFlBQVk7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7Ozs7O1VDM0ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxtREFBYyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjcmlwdCA9ICgoKT0+e1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuXHJcbmxldCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbmRpc3BsYXlCb29rKCk7XHJcblxyXG5mdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcclxuICAgIHRoaXMucmVhZCA9IHJlYWQ7XHJcbn1cclxuXHJcbiBjb25zdCBhZGRCb29rID0gKCk9PntcclxuICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XHJcbiAgIHZhciBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJykudmFsdWU7XHJcbiAgIHZhciBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLnZhbHVlO1xyXG4gICAgdmFyIGlzUmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkaXQnKS52YWx1ZVxyXG4gICAgaWYodGl0bGUgPT0gJycgfHwgYXV0aG9yID09ICcnIHx8IHBhZ2VzID09ICcnKXtcclxuICAgICAgICBhbGVydChcImZpZWxkcyBDYW5ub3QgYmUgZW1wdHkhIVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkKTtcclxuICAgIG15TGlicmFyeS5wdXNoKGJvb2spO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9IFwiXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKS52YWx1ZSA9IFwiXCJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLnZhbHVlID0gXCJcIlxyXG5cclxuICAgIGRpc3BsYXlCb29rKClcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvb2soKSB7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPVwiXCJcclxuICAgIG15TGlicmFyeS5mb3JFYWNoKChib29rLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZhciByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHZhciBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2YXIgcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcmVhZC5jbGFzc0xpc3QuYWRkKCdyZWFkJylcclxuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJylcclxuICAgICAgICByZWFkLmlubmVySFRNTCA9IGJvb2sucmVhZFxyXG4gICAgICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcInJlbW92ZVwiO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgIGJvb2suaW5kZXggPSBkYXRhO1xyXG4gICAgICAgICByZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7Ym9vay5pbmRleH1gKVxyXG4gICAgICAgICByZWFkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGAke2Jvb2suaW5kZXh9YClcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxoMj4ke2Jvb2sudGl0bGV9PC9oMj4gYnkgPGgzPiR7Ym9vay5hdXRob3J9PC9oMz48cD4ke2Jvb2sucGFnZXN9IFBhZ2VzYFxyXG4gICAgICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChyZW1vdmUpXHJcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKHJlYWQpXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bkRpdilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH0pO1xyXG4gICAgYnRuTGlzdGVuKClcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBidG5MaXN0ZW4oKXtcclxuICAgIGNvbnN0IGJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcclxuICAgIGJ0blJlbW92ZS5mb3JFYWNoKGJ0biA9PntcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIHJlbW92ZWJ0bihlLnBhdGhbMF0uZGF0YXNldC5pbmRleCk7XHJcbiAgICB9KVxyXG4gICB9KVxyXG5cclxuICAgY29uc3QgcmVhZGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhZCcpO1xyXG4gICByZWFkYnRucy5mb3JFYWNoKGJ0biA9PntcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIHRvZ2dsZShlLnBhdGhbMF0uZGF0YXNldC5pbmRleCwgYnRuLmlubmVySFRNTClcclxuICAgIH0pXHJcbiAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZShpbmRleCwgcmVhZCl7XHJcbiAgICBpZihyZWFkID09ICdyZWFkZWQnKXtcclxuICAgICAgICBteUxpYnJhcnlbaW5kZXhdLnJlYWQgPSBcIk5vdCByZWFkZWRcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbXlMaWJyYXJ5W2luZGV4XS5yZWFkID0gXCJyZWFkZWRcIlxyXG4gICAgfVxyXG4gICAgZGlzcGxheUJvb2soKVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZWJ0bihkYXRhKXtcclxuICAgIG15TGlicmFyeS5zcGxpY2UoZGF0YSwxKTtcclxuICAgICBkaXNwbGF5Qm9vaygpXHJcbn1cclxucmV0dXJuIHsgYWRkQm9vayB9XHJcblxyXG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzY3JpcHQgfSBmcm9tIFwiLi9zY3JpcHRcIjtcclxuXHJcblxyXG5cclxuXHJcbi8vYWRkIGJvb2sgXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9vay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcmlwdC5hZGRCb29rKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==