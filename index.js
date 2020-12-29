function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
      .then(r => r.json())
      .then(json => {
        renderBooks(json)
        renderPageCount(json)
      });
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

function renderPageCount(books) {
  const main = document.querySelector('main')
  let count = 0
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `${book.name} has ${book.numberOfPages} pages`
    count += book.numberOfPages
    main.appendChild(h2)
  })
  const h3 = document.createElement('h3')
  h3.innerHTML = `That's a grand total of ${count} pages!`
  main.appendChild(h3)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
