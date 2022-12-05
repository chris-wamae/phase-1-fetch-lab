function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
let myFetch = fetch('https://anapioficeandfire.com/api/books')
.then(function (response) {
  return response.json()})
.then( function renderBooks(data)
{console.log(data)
   for(let i=0;i <= data.length;i++)
 {let ul = document.createElement("ul")
 let main = document.querySelector("main")
 main.appendChild(ul)
 ul.textContent = data[i]["name"]}})
 return myFetch
}
fetchBooks()
