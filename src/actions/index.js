
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

const rndCategoryJoke = (joke, category) => {
    return {
        type: 'RND_CAT_JOKE',
        payload: joke,
        activeCategory: category
    }
};

const jokeRequest = () => {
    return {
        type: 'REQUEST_JOKE'
    }
};

const windowOpen = () => {
    return {
        type: 'SHOW_WINDOW',
    }
};

const windowClose = () => {
    return {
        type: 'CLOSE_WINDOW',
    }
}

export  {
    goodLoaded,
    randomJoke,
    jokeCategories,
    rndCategoryJoke,
    jokeRequest,
    windowOpen,
    windowClose
};