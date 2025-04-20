import { useState, useEffect } from 'react'
import axios from 'axios'

const CatFetcher = () => {
  const [catUrl, setCatUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchCat = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search')
      setCatUrl(response.data[0].url)
    } catch (error) {
      console.error('Ошибка при получении котика:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Случайный котик 😺</h2>
      {loading ? <p>Загружаем котика...</p> : <img src={catUrl} alt="cat" width="400" />}
      <br />
      <button onClick={fetchCat} style={{ marginTop: '1rem' }}>Показать другого котика</button>
    </div>
  )
}

export default CatFetcher
