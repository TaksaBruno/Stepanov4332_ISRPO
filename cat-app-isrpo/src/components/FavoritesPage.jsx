import { useFavorites } from '../hooks/useFavorites'
import CatCard from './CatCard'

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites()

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">⭐ Избранные котики</h2>

      {favorites.length === 0 ? (
        <p>У вас пока нет избранных котиков.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {favorites.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavorite={true}
              onToggle={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
