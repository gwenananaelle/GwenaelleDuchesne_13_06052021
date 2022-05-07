import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isLoggedIn: false
    },
    reducers: {
    }    
})

export const { setEmail } = usersSlice.actions

export default usersSlice.reducer