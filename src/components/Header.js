import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateProfileAsync } from '../features/users/usersSlice'

function Header() {
    const firstName = useSelector((state) => state.users.user.firstName)
    const lastName = useSelector((state) => state.users.user.lastName)
    const token = useSelector((state) => state.users.user.token)
    const [isUpdating, setIsUpdated] = useState(false)
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const dispatch = useDispatch()

    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            firstName: newFirstName,
            lastName: newLastName,
        }
        console.log(user)
        dispatch(updateProfileAsync({ token, user }))
        setIsUpdated(false)
    }
    async function handleReset(e) {
        setIsUpdated(false)
    }
    let userInfo
    if (isUpdating) {
        userInfo = (
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="input-wrapper">
                    <label htmlFor="firstName">FirstName</label>
                    <input
                        name="firstName"
                        autoComplete="firstName"
                        type="text"
                        id="firstName"
                        placeholder={firstName}
                        value={newFirstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastName">lastName</label>
                    <input
                        name="lastName"
                        autoComplete="lastName"
                        type="text"
                        id="lastName"
                        placeholder={lastName}
                        value={newLastName}
                        onChange={(e) => setNewLastName(e.target.value)}
                    />
                </div>
                <button className="sign-in-button" type="submit">
                    Save
                </button>
                <button className="sign-in-button" type="reset">
                    Cancel
                </button>
            </form>
        )
    } else {
        userInfo = (
            <>
                <h1>
                    Welcome back
                    <br />
                    {firstName} {lastName}!
                </h1>
                <button
                    className="edit-button"
                    onClick={() => setIsUpdated(true)}
                >
                    Edit Name
                </button>
            </>
        )
    }
    return <div className="header">{userInfo}</div>
}

export default Header
