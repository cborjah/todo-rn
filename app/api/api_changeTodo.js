const changeTodo = (userId, newTodo, listName) => {
  return fetch('http://localhost:7700/createTodo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&newTodo=${newTodo}&listName=${listName}`,
  })
    .then((response) => {
      return response.json();
    })
    .catch(error => console.log(error));
};

export default createTodo;
