export const postData = () => {
  return fetch('https://epk-be.herokuapp.com/api/v1/sessions', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "nbrissey@gmail.com",
      password: "password"
    }),
  }).then(res => res.json())
    .then(data => console.log(data.data))
    .catch(err => console.log(err))
}


