import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CatDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cat, setCat] = useState(null)

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await axios.get(`https://api.thecatapi.com/v1/images/${id}`)
        setCat(res.data)
      } catch (err) {
        console.error('Ошибка при получении котика:', err)
      }
    }
    fetchCat()
  }, [id])

  return (
    <div className="p-4 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Назад
      </button>

      {cat ? (
        <div className="max-w-xl w-full bg-white rounded shadow-lg p-4">
          <img src={cat.url} alt="cat" className="w-full object-cover rounded-md" />
          <p className="mt-4 text-center text-gray-600 text-sm">ID: {cat.id}, Размер: {cat.width}x{cat.height}</p>
          <a
            href={cat.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center text-blue-600 underline text-sm block"
          >
            Открыть оригинал
          </a>
        </div>
      ) : (
        <p>Загружаем котика...</p>
      )}
    </div>
  )
}

export default CatDetails
