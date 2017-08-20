const changeTodoStatus = (userId, newStatus, listIndex, todoIndex) => {
  // console.log(`in changeTodoStatus`);
  // console.log(`${userId}, ${newStatus}, ${listIndex}, ${todoIndex}`);
  return fetch('http://localhost:7700/changeTodoStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&newStatus=${newStatus}&listIndex=${listIndex}&todoIndex=${todoIndex}`,
  })
    .then((response) => {
      return response.json();
    })
    .catch(error => console.log(error));
};

export default changeTodoStatus;
