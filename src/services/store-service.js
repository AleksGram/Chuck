

export default class Store {
    data = [
        {id:1, name: 'Item1', price: 55},
        {id:2, name: 'Item2', price: 49},
        {id:3, name: 'Item3', price: 88},
    ];
    getItems () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 800)    
        })
    }
    
} 