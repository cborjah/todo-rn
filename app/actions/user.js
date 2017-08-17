import {
  LOGIN,
  ADD_LIST,
  ADD_TODO,
  SELECT_LIST,
} from './types';

import getUserData from '../api/api_login';

export const loginUser = (username, password) => ({
  type: LOGIN,
  payload: getUserData(username, password),
});

export const addList = listName => ({
  type: ADD_LIST,
  payload: {
    name: listName,
    todos: [],
  },
});

export const addTodo = todo => ({
  // in list given list passed name and todo to add
  type: ADD_TODO,
  payload: todo,
});

export const selectList = listName => ({
  type: SELECT_LIST,
  payload: listName,
});
