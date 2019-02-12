
const initialState = {
    goods:  [],
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOODS_LOADED':
            return {
                goods: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;