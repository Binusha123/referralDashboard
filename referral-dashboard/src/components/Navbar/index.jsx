import Cookies from "js-cookie"
import {Link,useNavigate} from "react-router-dom"
import "./index.css"
const Navbar = () => {

  const navigate = useNavigate()

  const logout = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Go Business
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>

      <button className="free-btn" onClick={logout}>
        Try for Free
      </button>
      <button className="logout-btn" onClick={logout}>
        Log out
      </button>
    </nav>
  )
}

export default Navbar