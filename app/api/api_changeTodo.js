const changeTodo = (userId, newTodo, listIndex, todoIndex) => {
  // console.log(`in changeTodo`);
  // console.log(`${userId}, ${newTodo}, ${listName}`);
  return fetch('http://localhost:7700/changeTodo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&newTodo=${newTodo}&listIndex=${listIndex}&todoIndex=${todoIndex}`,
  })
    .then((response) => {
      return response.json();
    })
    .catch(error => console.log(error));
};

export default changeTodo;
