
const goodLoaded = (newGoods) => {
    return {
        type: 'GOODS_LOADED',
        payload: newGoods
    }
}

export  {
    goodLoaded
};