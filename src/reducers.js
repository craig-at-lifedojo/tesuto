import { combineReducers } from "redux";
import { FETCH_API } from "./actions";

const listReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case FETCH_API:
      return { ...state, list: transformCards(action.list) };
    default:
      return state;
  }
};

const favoritesReducer = (state = { favorites: [] }, action) => {
  if (action.type === "UPDATE_FAVORITES") {
    // TODO
  }
  return state;
};

// const updateFavoritesActionCreator = (id=0) => ({
//     type: 'UPDATE_FAVORITES',
//     id
// });

export const reducers = combineReducers({
  favoritesReducer: favoritesReducer,
  list: listReducer
});

// function flattenArray(arr) {
//   arr.map(item => {
//     let newArr = [];
//     if (item.hasOwnProperty(keys)) {
//       return newArr.push(item);
//     }
//     return newArr;
//   });

export const transformCards = function(data) {
  let tdata = [];
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      let data2 = data[key];
      for (var key2 in data2) {
        if (data2.hasOwnProperty(key2)) {
          let type = key2;
          for (var i = 0; i < data2[key2].length; i++) {
            let obj = data2[key2][i];
            obj["type"] = type;
            tdata.push(obj);
          }
        }
      }
    }
  }
  return tdata.sort((a, b) => {
    return a.display_order - b.display_order;
  });
};
