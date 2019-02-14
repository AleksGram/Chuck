
const initialState = {
    loading: true,
    currentJoke: '',
    categories: [],
    categoryJoke: ''
}

const reducer = (state = initialState, action) => {
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
        case 'RND_CAT_JOKE':
        return {
            ...state,
            categoryJoke: action.payload,
            loading: false
        }
        default:
            return state;
    }
}

export default reducer; 