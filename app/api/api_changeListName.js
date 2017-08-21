const changeListName = (userId, newListName, listIndex) => {
  return fetch('http://localhost:7700/changeListName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userId=${userId}&newListName=${newListName}&listIndex=${listIndex}`,
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default changeListName;
