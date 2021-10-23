import { FilmEPK } from '../types';


export const postData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .catch(err => console.log(err))
}

// export const patchData = (data : object, filmID : number) => {
//   return fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${filmID}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({film_epk: data})
//   })
//   .then(res => res.json())
//   .then(data => console.log('PATCHED_DATA: ', data))
//   .catch(err => console.log('ERROR_IN_PATCH: ', err))
// }

export const patchData = (data: object, filmID: number) => {
  return fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${filmID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ film_epk: data })
  })
    .then(res => res.json())
}

export const getUser = (userID: number) => {
  return fetch(`https://epk-be.herokuapp.com/api/v1/users/${userID}`)
    .then(res => res.json())
}

export const getEPK = (epkID: string) => {
  return fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${epkID}`)
    .then(res => res.json())
}
