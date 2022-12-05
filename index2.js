function fetchBooks(functionParameter) {
    // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(function (response) {
    return response.json()})
  .then(function (data){
  return functionParameter(data)})
  }
  function renderBooks(booksObject)
  { for(i=0;i <= booksObject.length;i++)
   {let ul = document.createElement("ul")
   document.querySelector("main").append(ul)
   ul.textContent = booksObject[i]["name"]}
  }
  fetchBooks(renderBooks)
  /*
  function renderBooks(data)
  { for(i=0;i <= data.length;i++)
   {let ul = document.createElement("ul")
   document.querySelector("main").append(ul)
   ul.textContent = booksObject[i]["name"]}
  }
  fetchBooks(renderBooks)
  */
