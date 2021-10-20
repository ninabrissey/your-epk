export const postData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then(data => console.log(data.data))
    .catch(err => console.log(err))
}


