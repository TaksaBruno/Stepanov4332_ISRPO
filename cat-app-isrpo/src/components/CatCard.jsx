import { useNavigate } from 'react-router-dom'

const CatCard = ({ cat, isFavorite, onToggle }) => {
  const navigate = useNavigate()

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img
        src={cat.url}
        alt="cat"
        className="w-full h-64 object-cover cursor-pointer"
        onClick={() => navigate(`/details/${cat.id}`)}
      />
      <button
        onClick={() => onToggle(cat)}
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-yellow-100"
        title="В избранное"
      >
        {isFavorite ? '⭐' : '☆'}
      </button>
    </div>
  )
}

export default CatCard
