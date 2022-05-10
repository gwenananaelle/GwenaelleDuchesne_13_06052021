import { useSelector } from 'react-redux'

function Header() {
    const firstName = useSelector((state) => state.users.user.firstName)
    const lastName = useSelector((state) => state.users.user.lastName)
    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {firstName} {lastName}!
            </h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default Header
