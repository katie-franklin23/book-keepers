import { Link } from 'react-router-dom'
import booksByGenre from '../data/books'

function Nav() {
  const booksData = Object.keys(booksByGenre)

  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li key="item">
          <Link to="/">Home</Link>
        </li>
        <br />
        {booksData.map((book, index) => {
          return (
            <li key={index}>
              <Link to={`/books/${book}`}>{book}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
