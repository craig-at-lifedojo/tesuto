import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const favoritesReducer = (state = {favorites:[]}, action) => {
    if (action.type === 'UPDATE_FAVORITES'){
        // TODO
    }
    return state
};

// const updateFavoritesActionCreator = (id=0) => ({
//     type: 'UPDATE_FAVORITES',
//     id
// });

const reducers = combineReducers({favoritesReducer: favoritesReducer})
const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
