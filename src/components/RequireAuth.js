import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAsync } from '../features/users/usersSlice'

function RequireAuth({ children }) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.users.user.isLoggedIn)
    const token = useSelector((state) => state.users.user.token)
    if (!isLoggedIn) {
        // Redirect them to the /login page

        return <Navigate to="/login" replace />
    }
    dispatch(getProfileAsync(token))
    return children
}
export default RequireAuth
