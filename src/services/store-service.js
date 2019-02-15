

export default class ChackService {
    
    _urlBase = 'https://api.chucknorris.io/jokes/'

    async getRandomJoke () {
        const randomPath = 'random'
        const res = await fetch (`${this._urlBase}${randomPath}`);

        if (!res.ok) {
            throw new Error (`Could not fetch `, `Getting ${res.status}`)
        }
        return await res.json();
    }

    async getJokeCategories () {
        const categoryPath = 'categories';
        const res = await fetch (`${this._urlBase}${categoryPath}`)

        if (!res.ok) {
            throw new Error (`Could not fetch `, `Getting ${res.status}`)
        }
        return await res.json();
    }

    async getCategoryRndJoke (category) {
        const path = `random?categoty=${category}`;
        const res =  await fetch(`${this._urlBase}${path}`)

        if (!res.ok) {
            throw new Error (`Could not fetch `, `Getting ${res.status}`)
        }
        return await res.json();
    }

};