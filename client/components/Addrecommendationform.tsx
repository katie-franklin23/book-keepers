import React, { useState } from 'react'

interface Props {
  onAddRecommendation: (newRecommendation: Recommendation) => void
}

interface Recommendation {
  Recommendation: string
  Genre: string
  Author: string
}

const initialData = {
  Recommendation: '',
  Genre: '',
  Author: '',
}

function AddRecommendationForm(props: Props) {
  const { onAddRecommendation } = props

  const [formData, setFormData] = useState<Recommendation>(initialData)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(formData)

    onAddRecommendation(formData)

    setFormData(initialData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="recommendation">Recommendation name </label>
      <input
        id="recommendation"
        name="recommendation"
        type="text"
        value={formData.Recommendation}
        onChange={handleChange}
      />
      <label htmlFor="genre">Genre </label>
      <input
        id="genre"
        name="genre"
        type="text"
        value={formData.Genre}
        onChange={handleChange}
      />
      <label htmlFor="author">Author </label>
      <input
        id="author"
        name="author"
        type="text"
        value={formData.Author}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddRecommendationForm
