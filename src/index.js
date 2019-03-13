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

const programsReducer = (state = {programs:[]}, action) => {
    switch (action.type) {
      case 'LOAD_USER_PROGRAM':
        return Object.assign({}, state, {
        	programs: action.payload,
        });
   	  default: 
      	return state;
    }
};

// const updateFavoritesActionCreator = (id=0) => ({
//     type: 'UPDATE_FAVORITES',
//     id
// });

const reducers = combineReducers({favoritesReducer: favoritesReducer, programsReducer: programsReducer})
const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
