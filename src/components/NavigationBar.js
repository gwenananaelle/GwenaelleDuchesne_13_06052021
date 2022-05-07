import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    const firstName = useSelector(state => state.users.firstName)
    const isLoggedIn = useSelector(state => state.users.isLoggedIn)
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={``}>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={``}>
                    <FontAwesomeIcon icon={faCircleUser} />
                    {firstName}
                </Link>
                <Link className="main-nav-item" to={``}>
                    {isLoggedIn ? (
                        <>
                            <FontAwesomeIcon icon={faSignOut} /> Sign Out
                        </>
                    ) : (
                        'Sign In'
                    )}
                </Link>
            </div>
        </nav>
    )
}
export default NavigationBar
