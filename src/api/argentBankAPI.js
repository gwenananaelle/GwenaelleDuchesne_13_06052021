export async function login(user) {
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
                body: user,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }
        )
        if (response.ok) {
            console.log('ok')
            return response.json()
        } else {
            const res = await response.json()
            alert(`${res.message}`)
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getUserProfile(token) {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    var raw = ''

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            requestOptions
        )
        if (response.ok) {
            const res = await response.json()
            console.log(`status : ${res.status} message : ${res.message}`)
            return res
        } else {
            const res = await response.json()
            alert(`${res.message}`)
            return res
        }
    } catch (error) {
        console.log('error', error)
        return error
    }
}

export async function updateUserProfile(token, { firstName, lastName }) {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Content-Type', 'application/json')
    let user = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
    })

    var raw = user

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            requestOptions
        )
        if (response.ok) {
            const res = await response.json()
            console.log(`status : ${res.status} message : ${res.message}`)
            return res
        } else {
            const res = await response.json()
            alert(`${res.message}`)
            return res
        }
    } catch (error) {
        console.log('error', error)
        return error
    }
}
