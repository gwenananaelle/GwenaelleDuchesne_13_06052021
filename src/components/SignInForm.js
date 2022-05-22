import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { loginAsync } from '../features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SignInForm() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const usersStatus = useSelector((state) => state.users.status)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemembered, setIsRemembered] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const user = JSON.stringify({ email: email, password: password })
        dispatch(loginAsync(user))
    }

    useEffect(() => {
        if (usersStatus === 'succeeded') {
            navigate('/profile', { replace: true })
        }
    }, [usersStatus, navigate])

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            name="email"
                            autoComplete="username"
                            type="email"
                            required
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            autoComplete="current-password"
                            type="password"
                            required
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            value={isRemembered}
                            onChange={(e) => setIsRemembered(e.target.value)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}
export default SignInForm
