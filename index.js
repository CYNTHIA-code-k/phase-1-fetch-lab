//
function fetchBooks() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  // Return the fetch request
  return fetch("https://anapioficeandfire.com/api/books", requestOptions)
    .then(response => response.json())
    .then(booksData => {
      renderBooks(booksData);
      // Return the booksData if you need access to it outside the function
      return booksData;
    })
    .catch(error => console.error(error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// To access the fetch request directly
const fetchRequest = fetchBooks();

// You can now handle the fetch request as needed
fetchRequest
  .then(booksData => {
    // Handle the data if needed
    console.log(booksData);
  })
  .catch(error => console.error(error));
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  });