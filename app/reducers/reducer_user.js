import {
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  ADD_LIST_FULFILLED,
  ADD_LIST_REJECTED,
  ADD_TODO,
  SELECT_LIST,
  SELECT_TODO,
} from '../actions/types';

// userId is saved in the store and passed to components that need to
// retrieve data from the backend.
const INITIAL_STATE = { lists: [], activeList: null, activeTodo: null, userId: null };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case LOGIN_FULFILLED:
      console.log(action.payload);
      return { ...state, lists: action.payload.lists, userId: action.payload._id };

    case LOGIN_REJECTED:
      return { ...state, error: true };

    case ADD_LIST_FULFILLED:
      const updatedLists = action.payload.lists.slice();
      return { ...state, lists: updatedLists };

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
      for (let item of state.lists) {
        if (item.name === action.payload) {
          return { ...state, activeList: item };
        }
      }

    case SELECT_TODO:
      console.log(`in select todo reducer`);
      // console.log(state.activeList);
      for (let todoObj of state.activeList.todos) {
        if (todoObj.todo === action.payload) {
          console.log(todoObj);
          return { ...state, activeTodo: todoObj };
        }
      }

    default:
      return state;
  }
}
