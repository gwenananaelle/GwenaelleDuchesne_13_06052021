// A mock function to mimic making an async request for data
export function loginMock(user) {
    console.log(user)
    return new Promise((resolve) => {
        const response = {
            status: 200,
            message: 'User successfully logged in',
            body: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmVlZGY1MjRmMTk5NDM3NTlmODlhMCIsImlhdCI6MTY1MjA5Njg3MCwiZXhwIjoxNjUyMTgzMjcwfQ.hUiUzsicQ_LEPZDrWc5ZmVmWQA61sqkfrS0UmeALzTY',
            },
        }
        setTimeout(() => resolve(response), 500)
    })
}

export function getProfileMock(token) {
    console.log(token)
    return new Promise((resolve) => {
        const response = {
            status: 200,
            message: 'Successfully got user profile data',
            body: {
                email: 'tony@stark.com',
                firstName: 'Tony',
                lastName: 'Stark',
                createdAt: '2022-05-01T20:30:45.950Z',
                updatedAt: '2022-05-01T20:30:45.950Z',
                id: '626eedf524f19943759f89a0',
            },
        }
        setTimeout(() => resolve(response), 500)
    })
}

export function updateProfileMock(token, { firstName, lastName }) {
    console.log(`token: ${token} firstName: ${firstName} lastName: ${lastName}`)
    return new Promise((resolve) => {
        const response = {
            status: 200,
            message: 'Successfully updated user profile data',
            body: {
                email: 'tony@stark.com',
                firstName: 'Paolo',
                lastName: 'Paolotito',
                createdAt: '2022-05-01T20:30:45.950Z',
                updatedAt: '2022-05-12T12:38:10.627Z',
                id: '626eedf524f19943759f89a0',
            },
        }
        setTimeout(() => resolve(response), 500)
    })
}
