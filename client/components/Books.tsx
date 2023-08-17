import { useParams } from 'react-router-dom'
import booksByGenre from '../data/books'

export default function Books() {
  const { genre } = useParams()

  // Gets an array of books
  const getBooksByGenre = booksByGenre[genre]
  console.log(booksByGenre[genre])
  // Create list item for each book title
  const listOfBooks = getBooksByGenre.map((bookTitle: string) => (
    <li key={bookTitle}>{bookTitle}</li>
  ))

  return <ul>{listOfBooks}</ul>
}
