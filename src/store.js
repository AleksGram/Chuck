import { createStore } from 'redux';
import reducer from './reducers'

// store

const store = createStore(reducer);

export default store;