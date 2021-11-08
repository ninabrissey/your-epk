import { FilmEPK } from "../types"

export const postData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
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

export const putData = (data: any, checksum: string, directUploadURL: any) => {
  return fetch(directUploadURL, {
    method: 'PUT',
    headers: {
      "Content-Type": "image/jpeg",
      "Content-MD5": checksum,
    },
    body: JSON.stringify(data), //is the binary or base64
  })
}

export const getArrayData = (type: any) => {
  return fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${type}`)
  .then(res => res.json())
}



export const postUserData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Set-Cookie": "test-cookie=yummy-cookie"
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
}