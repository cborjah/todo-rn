const getUserData = (username, password) => {
  return fetch('http://localhost:7700/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}&password=${password}`,
  }).then((response) => {
    /*
    Must return a PROMISE (response.json()) for redux-promise-middlware to work.
    */
    // console.log(response.json());
    return response.json();
  }).catch(error => console.log(error));
};

export default getUserData;
