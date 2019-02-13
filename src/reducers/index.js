
const initialState = {
    loading: true,
    currentJoke: '',
    categories: []
}

const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'RND_JOKE':
        return {
            ...state,
            currentJoke: action.payload,
            loading: false
        }
        case 'JOKE_CATEGORY':
        return {
            ...state,
            categories: action.payload,
            loading: false
        }
        default:
            return state;
    }
}

export default reducer; 