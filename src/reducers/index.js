
const initialState = {
    loading: true,
    currentJoke: '',
    categories: [],
    categoryJoke: '',
    activeCategory: '',
    showWindow: false
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
        case 'REQUEST_JOKE':
        return {
            ...state,
            loading: true
        }
        case 'SHOW_WINDOW':
            return {
                ...state,
                showWindow: true
            };

        case 'CLOSE_WINDOW':
            return {
                ...state,
                showWindow: false
            };
        default:
            return state;
    }
}

export default reducer; 