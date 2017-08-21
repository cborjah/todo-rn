const deleteTodo = (userId, listIndex, todoIndex) => {
  return fetch('http://localhost:7700/deleteTodo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&&listIndex=${listIndex}&todoIndex=${todoIndex}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default deleteTodo;
