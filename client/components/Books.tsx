import { useParams } from 'react-router-dom'
import booksByGenre from '../data/books'

export default function Books() {
  const { genre } = useParams()

  if (!genre) {
    return <p>Please specify a genre</p>
  }

  // Gets an array of books
  const getBooksByGenre = booksByGenre[genre]
  console.log(booksByGenre[genre])
  // Create list item for each book title
  const listOfBooks = getBooksByGenre.map((bookTitle: string) => (
    <li key={bookTitle}>{bookTitle}</li>
  ))

  return (
    <div>
      <h2>{genre} Book Titles</h2>
      <img src={`/images/${genre}.jpeg`} alt={`${genre} title`} />
      <ul>{listOfBooks}</ul>
    </div>
  )
}
