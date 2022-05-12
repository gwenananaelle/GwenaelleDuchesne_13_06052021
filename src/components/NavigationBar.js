import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../features/users/usersSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    const dispatch = useDispatch()
    const firstName = useSelector((state) => state.users.user.firstName)
    const isLoggedIn = useSelector((state) => state.users.user.isLoggedIn)

    const loginButton = (
        <Link className="main-nav-item" to={'/login'}>
            Sign In
        </Link>
    )
    const logoutButton = (
        <Link
            className="main-nav-item"
            onClick={() => {
                dispatch(logOut())
            }}
            to="/"
        >
            <>
                <FontAwesomeIcon icon={faSignOut} /> Sign Out
            </>
        </Link>
    )
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/profile">
                    <FontAwesomeIcon icon={faCircleUser} />
                    {firstName}
                </Link>
                {isLoggedIn ? logoutButton : loginButton}
            </div>
        </nav>
    )
}
export default NavigationBar
