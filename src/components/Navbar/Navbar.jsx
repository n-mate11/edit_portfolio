import { Link } from "react-router-dom";
import './styles.scss'

export const Navbar = () => {

    return(
        <nav>
            <Link to={'/'} className="brand">
                <p>Csehi Edit</p>
            </Link>
            <div className="links">
                <Link to={'/work'}>
                    <p>Munkáim</p>
                </Link>
                <Link to={'/about'}>
                    <p>Rólam</p>
                </Link>
                <Link to={'/contact'}>
                    <p>Elérhetoségeim</p>
                </Link>
            </div>
        </nav>
    );
}