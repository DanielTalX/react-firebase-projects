import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { useAuthContext } from './hooks/useAuthContext'
import ThemeSelector from './components/ThemeSelector'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import NotFound from './pages/notfound/NotFound'
import Update from './pages/update/Update'

// styles
import './App.css'


function App() {
  const { mode } = useTheme()
  const { authIsReady, user } = useAuthContext()

  return (
    <div className={`App ${mode}`}>
      { authIsReady && (
      <div>
        <Navbar 
        />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" 
            element={<Home user={user} />}
          />
          <Route 
            path="/create"
            element={ user?.uid ? <Create user={user} /> : <Navigate to="/" />}
          />
           <Route 
            path="/update/:id"
            element={ user?.uid ? <Update user={user} /> : <Navigate to="/" />}
          />
          <Route 
            path="/search"
            element={<Search user={user} />}
          />
          <Route
            path="/recipes/:id"
            element={ user?.uid ? <Recipe user={user}/> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={ user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={ user && user.displayName ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      )}
    </div>
  );
}

export default App