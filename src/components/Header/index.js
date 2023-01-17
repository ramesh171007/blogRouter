import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-style">
    <div className="nxt-wave-img">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img-style"
      />
      <h1 className="heading-text">Wave</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
