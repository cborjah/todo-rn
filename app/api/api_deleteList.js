const deleteList = (userId, listIndex) => {
  return fetch('http://localhost:7700/deleteList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&&listIndex=${listIndex}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default deleteList;
