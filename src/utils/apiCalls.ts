import { FilmEPK } from "../types";
import Cookies from 'js-cookie';

const cookie: any = Cookies.get('csrf-token')


export const postData = (url: string, data: object) => {
  const cookie: any = Cookies.get('csrf-token')
  console.log('cookie in postdata', cookie)

  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": cookie
    },
    body: JSON.stringify(data),
    credentials: "include"
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`error ${res.status}`)
  })
}

export const patchData = (data: object, filmID: number) => {
  const cookie: any = Cookies.get('csrf-token')
  return fetch(`https://epk-be.herokuapp.com/api/v1/film_epk/${filmID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": cookie
    },
    credentials: "include",
    body: JSON.stringify({ film_epk: data })
  })
    .then(res => res.json())
}

export const getUser = () => {
  return fetch(`https://epk-be.herokuapp.com/api/v2/user`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": cookie
    },
    credentials: "include"
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  })
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
    },
    body: JSON.stringify(data),
    credentials: 'include',
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  })
}

export const deleteIncluded = (type: string, id: string) => {
  const cookie: any = Cookies.get('csrf-token')

  return fetch(`https://epk-be.herokuapp.com/api/v1/${type}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": cookie
    },
    credentials: "include"
  })
};

// DELETE FILM FAM MEMBER
export const deleteData = (ID: any) => {
  return fetch(`https://epk-be.herokuapp.com/api/v1/film_fams/${ID}`, {
    method: 'DELETE'
  }).then(res => res.json())
}
