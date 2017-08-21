import {
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  ADD_LIST_FULFILLED,
  ADD_LIST_REJECTED,
  DELETE_LIST_FULFILLED,
  DELETE_LIST_REJECTED,
  ADD_TODO,
  SELECT_LIST,
  SELECT_TODO,
  LOGOUT,
} from '../actions/types';

// userId is saved in the store and passed to components that need to
// retrieve data from the backend.
const INITIAL_STATE = {
  lists: [],
  activeList: null,
  activeListIndex: null,
  activeTodo: null,
  activeTodoIndex: null,
  userId: null,

  // error state is not used in the app at this moment
  error: false,
};

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

    case DELETE_LIST_FULFILLED:
      return { ...state, lists: action.payload.lists };

    case DELETE_LIST_REJECTED:
      return { ...state, error: true };

    case SELECT_LIST:
      /*
       Iterates through lists array to find the selected list and sets
       activeList equal to it. This is so the newly created todos are added
       to the correct list.
      */
      const lists = state.lists;
      for(let i = 0; i < lists.length; i++) {
        if (lists[i].name === action.payload) {
          return { ...state, activeList: lists[i], activeListIndex: i };
        }
      }

    case SELECT_TODO:
      console.log(`in select todo reducer`);
      console.log(state.activeList);
      const todos = state.activeList.todos;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].todo === action.payload) {
          return { ...state, activeTodo: todos[i], activeTodoIndex: i };
        }
      }

    case LOGOUT:
      return {
        ...state,
        lists: [],
        activeList: null,
        activeListIndex: null,
        activeTodo: null,
        activeTodoIndex: null,
        userId: null,
      };

    default:
      return state;
  }
}
