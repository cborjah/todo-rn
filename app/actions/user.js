import {
  LOGIN,
  ADD_LIST,
  ADD_TODO,
  SELECT_LIST,
  SELECT_TODO,
  CHANGE_TODO,
  CHANGE_TODO_STATUS,
} from './types';

// fetch calls to the API
import getUserData from '../api/api_login';
import createList from '../api/api_createList';
import createTodo from '../api/api_createTodo';
import changeTodo from '../api/api_changeTodo';
import changeTodoStatus from '../api/api_changeTodoStatus';

/*
redux-promise-middleware allows you to pass a promise as the payload. In this
case the fetch calls to the API are payloads for loginUser, addList, addTodo.
Once the promise starts the middleware dispatches a PENDING action.
When the fetch is resolved the middleware dipatches a final action with the
result as the new payload. The middleware appends _FULFILLED, _REJECTED
and _PENDING to the original type. This is useful for error handling and setting
up a loading indicator.
*/

export const loginUser = (username, password) => ({
  type: LOGIN,
  payload: getUserData(username, password),
});

export const addList = (userId, listName) => {
  return {
    type: ADD_LIST,
    payload: createList(userId, listName),
  };
};

export const addTodo = (userId, todo, activeList) => {
  return {
    type: ADD_TODO,
    payload: createTodo(userId, todo, activeList.name),
  };
}

// Passes the name of the selected list to the reducer in order to set
// the activeList state.
export const selectList = listName => ({
  type: SELECT_LIST,
  payload: listName,
});

export const selectTodo = todo => ({
  type: SELECT_TODO,
  payload: todo,
});

export const editTodo = (userId, newTodo, listIndex, todoIndex) => ({
  type: CHANGE_TODO,
  payload: changeTodo(userId, newTodo, listIndex, todoIndex),
});

export const editTodoStatus = (userId, newStatus, listIndex, todoIndex) => ({
  type: CHANGE_TODO_STATUS,
  payload: changeTodoStatus(userId, newStatus, listIndex, todoIndex),
});
