const changeTodo = (userId, newTodo, listIndex, todoIndex) => {
  return fetch('http://localhost:7700/changeTodo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&newTodo=${newTodo}&listIndex=${listIndex}&todoIndex=${todoIndex}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default changeTodo;
