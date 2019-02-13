
const goodLoaded = (newGoods) => {
    return {
        type: 'GOODS_LOADED',
        payload: newGoods
    }
}

const randomJoke = (joke) => {
    return {
        type: 'RND_JOKE',
        payload: joke
    }
}

const jokeCategories = (categories) => {
    return {
        type: 'JOKE_CATEGORY',
        payload: categories
    }
}

export  {
    goodLoaded,
    randomJoke,
    jokeCategories
};