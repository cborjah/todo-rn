const createTodo = (userId, todo, listName) => {
  return fetch('http://localhost:7700/createTodo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&todo=${todo}&listName=${listName}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default createTodo;
