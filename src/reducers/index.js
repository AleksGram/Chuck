
const initialState = {
    loading: true,
    currentJoke: '',
    categories: [],
    categoryJoke: '',
    activeCategory: ''
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
            loading: false,
            activeCategory: action.activeCategory
        }
        default:
            return state;
    }
}

export default reducer; 