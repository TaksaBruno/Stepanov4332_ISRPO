import { useState, useEffect } from 'react'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(saved)
  }, [])

  const toggleFavorite = (cat) => {
    const exists = favorites.find(fav => fav.id === cat.id)
    let updated = []

    if (exists) {
      updated = favorites.filter(fav => fav.id !== cat.id)
    } else {
      updated = [...favorites, cat]
    }

    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const removeFavorite = (id) => {
    const updated = favorites.filter(fav => fav.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return { favorites, toggleFavorite, removeFavorite }
}
