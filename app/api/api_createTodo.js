const createTodo = (userId, todo) => {
  return fetch('http://localhost:7700/createList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&todo=${todo}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default createTodo;
