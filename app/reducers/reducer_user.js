import {
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  ADD_LIST_FULFILLED,
  ADD_LIST_REJECTED,
  ADD_TODO,
  SELECT_LIST,
} from '../actions/types';

// userId is saved in the store and passed to components that need to
// retrieve data from the backend.
const INITIAL_STATE = { lists: [], activeList: null, userId: null };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case LOGIN_FULFILLED:
      console.log(action.payload);
      return { ...state, lists: action.payload.lists, userId: action.payload._id };

    case LOGIN_REJECTED:
      return { ...state, error: true };

    case ADD_LIST_FULFILLED:
      return { ...state, lists: action.payload.lists };

    case ADD_LIST_REJECTED:
      return { ...state, error: true };

    // case ADD_TODO:
      // plan is to push new todo object into the active list's todos array

    case SELECT_LIST:
      /*
       Iterates through lists array to find the selected list and sets
       activeList equal to it. This is so the newly created todos are added
       to the correct list.
      */
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
