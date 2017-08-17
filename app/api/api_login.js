const getUserData = (username, password) => {
  // console.log(username, password);
  return fetch('http://localhost:7700/login', {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: JSON.stringify({
    //   'username': username,
    //   'password': password,
    // }),
    body: `username=${username}&password=${password}`,
  }).then((response) => {
    /*
    Must return a PROMISE (response.json()) for redux-promise-middlware to work.
    */
    return response.json();
  }).catch(error => console.log(error));
};

export default getUserData;
