const initialState = {
    entries: []
}

export default (state=initialState, actions) => {
    switch (actions.type) {
        case 'GET_ENTRIES_SUCCESS':
            return {
                ...state,
                entries: actions.payload
            }
        case 'GET_ENTRIES_FAILURE':
            console.log(actions.message)
            return {
                ...state
            }
        default:
            return {...state}
    }
}