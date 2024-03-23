import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles
import './Navbar.css'
import Avatar from './Avatar'

export default function Navbar () {
  const { color } = useTheme()
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipes App</h1>
        </Link>
        {!user && (
          <>
            <Link className="customLink" to="/login">login</Link>
            <Link className="customLink" to="/signup">signup</Link>
          </>
        )}

        {user && (
          <>
            {!isPending && <Link className="customLink" to="/create">Create Recipe</Link>}
            {!isPending && <Link className="customLink" to="/" onClick={logout}>Logout</Link>}
            {isPending && <Link className="customLink" to="/" disabled>Logging out...</Link>}
            <div style={{ marginLeft: "20px" }}>
              <Avatar src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} title={user.displayName} />
            </div>
          </>
        )}
        
      </nav>
    </div>
  )
}
