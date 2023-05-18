export const initalstate = {
    username: '',
    password: '',
    error: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'username':
            return { ...state, username: action.value }
        case 'password':
            return { ...state, password: action.value }
        case 'error':
            return { ...state, error: action.value }
        default:
            return initalstate
    }
}