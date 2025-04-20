import { Routes, Route } from 'react-router-dom'
import CatFetcher from './components/CatFetcher'
import CatDetails from './components/CatDetails'
import FavoritesPage from './components/FavoritesPage'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <CatFetcher />
          </Layout>
        }
      />
      <Route
        path="/favorites"
        element={
          <Layout>
            <FavoritesPage />
          </Layout>
        }
      />
      <Route
        path="/details/:id"
        element={
          <Layout>
            <CatDetails />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
