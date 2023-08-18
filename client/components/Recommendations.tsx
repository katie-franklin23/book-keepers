import { useState } from 'react'
import AddRecommendationForm from './Addrecommendationform'

function Recommendation() {
  const [recommendations, setRecommendation] = useState([
    { recommendation: 'Title', genre: 'Thriller', author: 'R L Stine' },
  ])

  function handleAddRecommendation(newRecommendation: Recommendation) {
    setRecommendation([...recommendations, newRecommendation])
  }

  const bookArray = recommendations.map((book) => {
    return (
      <li key={book}>
        <p>Recommendation</p>
        <p>Genre</p>
        <p>Author</p>
      </li>
    )
  })

  return (
    <main>
      <h1>{'Book Recommendation'}</h1>

      <h2>{'Add a book:'}</h2>
      <AddRecommendationForm onAddRecommendation={handleAddRecommendation} />

      <h2>{'Here are your books: '}</h2>
      <ul>{bookArray}</ul>
    </main>
  )
}

export default Recommendation
