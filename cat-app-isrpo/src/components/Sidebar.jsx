import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const linkStyle = (path) =>
    `block px-4 py-2 rounded hover:bg-blue-100 ${
      location.pathname === path ? 'bg-blue-200 font-semibold' : ''
    }`

  return (
    <div className="w-full sm:w-48 bg-white shadow-md h-full sm:h-screen px-2 py-4">
      <nav className="flex sm:flex-col sm:items-start gap-2 sm:gap-0">
        <Link to="/" className={linkStyle('/')}>
          🏠 Главная
        </Link>
        <Link to="/favorites" className={linkStyle('/favorites')}>
          ⭐ Избранное
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar