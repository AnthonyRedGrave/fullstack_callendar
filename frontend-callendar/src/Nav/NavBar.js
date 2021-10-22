import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


function NavBar() {
  const access = localStorage.getItem('access_token')
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {!access && <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/login/", fromDashboard: false }}>Вход</Link>
                </li>}
                {!access && <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/registration/", fromDashboard: false }}>Регистрация</Link>
                </li>}
                {access && <li className="nav-item">
                    <Link className="nav-link"  to={{ pathname: "/own/", fromDashboard: false }}>Личный кабинет</Link>
                </li>}
            </ul>
            </div>
        </div>
    </nav>

  );
}

export default NavBar;