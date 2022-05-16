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
            <>
                <h1>Welcome back</h1>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <div className="edit-wrapper">
                        <input
                            name="firstName"
                            autoComplete="firstName"
                            type="text"
                            id="firstName"
                            placeholder={firstName}
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                        />
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
                    <div className="btn-wrapper">
                        <button className="edit-button" type="submit">
                            Save
                        </button>
                        <button className="edit-button" type="reset">
                            Cancel
                        </button>
                    </div>
                </form>
            </>
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
