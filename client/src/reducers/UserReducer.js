const initialState = {
    isFetching: false,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isCheckedIn: null,
    user: {},
    mostRecentSite: {},
    records: []
}


export default (state=initialState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                isFetching: true
            }
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', action.token)
            localStorage.setItem('user_id', action.user.userId)
            localStorage.setItem('user_firstname', action.user.firstname)
            localStorage.setItem('user_lastname', action.user.lastname)
            localStorage.setItem('user_email', action.user.email)



            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                user: action.user
            }
        case 'REGISTER_FAILURE':
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isFetching: true
            }
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.token)
            localStorage.setItem('user_id', action.user.userId)
            localStorage.setItem('user_firstname', action.user.firstname)
            localStorage.setItem('user_lastname', action.user.lastname)
            localStorage.setItem('user_email', action.user.email)

            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                user: action.user
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false
            }
        case 'LOGOUT':
            localStorage.removeItem('token')
            localStorage.removeItem('requestedLocationId')
            localStorage.removeItem('user_id')
            localStorage.removeItem('user_firstname')
            localStorage.removeItem('user_lastname')
            localStorage.removeItem('user_email')

            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                user: null,
                site: null
            }
        case 'CHECKIN_REQUEST':
            //console.log(action.siteId)
            return {
                ...state,
                isFetching: true,
            }
        case 'CHECKIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                isCheckedIn: true,
                isAuthenticated: true,
                mostRecentSite: action.site
            }
        case 'CHECKIN_FAILURE':
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                isCheckedIn: false
            }
        default:
            return {...state}
    }
}