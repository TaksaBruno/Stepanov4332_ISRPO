import { useState, useEffect } from 'react'
import axios from 'axios'
import CatCard from './CatCard'
import { useFavorites } from '../hooks/useFavorites'

const CatFetcher = () => {
  const [cats, setCats] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { favorites, toggleFavorite } = useFavorites()

  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/categories')
      setCategories(res.data)
    } catch (err) {
      console.error('Ошибка при загрузке категорий:', err)
    }
  }

  const fetchCats = async () => {
    setLoading(true)
    try {
      const url = selectedCategory
        ? `https://api.thecatapi.com/v1/images/search?limit=9&category_ids=${selectedCategory}`
        : `https://api.thecatapi.com/v1/images/search?limit=9`
      const res = await axios.get(url)
      setCats(res.data.slice(0, 9))
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCategories()
    fetchCats()
  }, [])

  useEffect(() => {
    fetchCats()
  }, [selectedCategory])

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🐾 Котогалерея по категориям</h2>

      <div className="mb-6 flex gap-2 flex-col sm:flex-row">
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded-md shadow-md w-full sm:w-64"
        >
          <option value="">Все категории</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          onClick={fetchCats}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Обновить котиков
        </button>
      </div>

      {loading ? (
        <p className="text-lg">Загружаем котов...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavorite={favorites.some(fav => fav.id === cat.id)}
              onToggle={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CatFetcher
