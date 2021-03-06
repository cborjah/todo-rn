const createList = (userId, listName) => {
  return fetch('http://localhost:7700/createList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&listName=${listName}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default createList;
