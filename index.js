// Function to fetch the books from the API
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      renderBooks(data);
      logBookData(data);
    });
}

// Function to render the books on the webpage
function renderBooks(books) {
  const booksContainer = document.getElementById('books');

  // Check if booksContainer exists
  if (!booksContainer) {
    console.error('Element with ID "books" not found in the DOM.');
    return;
  }

  booksContainer.innerHTML = ''; // Clear any existing content

  books.forEach(book => {
    const bookItem = document.createElement('li');
    bookItem.textContent = book.name;
    booksContainer.appendChild(bookItem);
  });
}

// Function to log book data and find specific details
function logBookData(books) {
  const fifthBook = books[4];
  console.log("5th Book in the series:", fifthBook);

  const totalPages = books.reduce((total, book) => total + book.numberOfPages, 0);
  console.log("Total number of pages of all the books:", totalPages);
}

// Function to fetch the 1031st character
function fetchCharacter() {
  return fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((response) => response.json())
    .then((character) => {
      console.log("1031st Character in the series:", character);
    });
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
  fetchCharacter();
});
