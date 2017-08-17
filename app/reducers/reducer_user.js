import {
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  ADD_LIST,
  ADD_TODO,
  SELECT_LIST,
} from '../actions/types';

const INITIAL_STATE = { lists: [], activeList: null };

export default function (state = INITIAL_STATE, action) {
  const updatedLists = state.lists.slice();

  switch (action.type) {
    case LOGIN_FULFILLED:
      // console.log('login fulfilled');
      // console.log(action.payload);
      return { ...state, lists: action.payload.lists };

    case LOGIN_REJECTED:
      // console.log('login rejected');
      return { state, error: true };

    case ADD_LIST:
      updatedLists.push(action.payload);
      return { ...state, lists: updatedLists };

    case ADD_TODO:
      const updatedActiveList = state.activeList;
      updatedActiveList.todos.push(action.payload);
      return { ...state, activeList: updatedActiveList };

    case SELECT_LIST:
      for(let item of state.lists) {
        if (item.name === action.payload) {
          return { ...state, activeList: item };
        } else {
          return state;
        }
      }

    default:
      return state;
  }
}
