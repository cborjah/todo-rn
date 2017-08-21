const getUserData = (username, password) => {
  return fetch('http://localhost:7700/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}&password=${password}`,
  })
    /*
    Must return a PROMISE, response.json() in this case, for
    redux-promise-middlware to work.
    */
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default getUserData;
