import { postData } from '../utils/apiCalls';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

//********** Helpers **********//
export const fileToData = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (fileEvent: any) => {
      let binary = CryptoJS.lib.WordArray.create(fileEvent.target.result)
      const md5 = CryptoJS.MD5(binary)
      resolve(md5)
    }
    reader.onerror = () => {
      reject('oops, something went wrong with the file reader.')
    }

    reader.readAsArrayBuffer(file)
  })
}

export const fileCheckSum = async (file: any) => {
  const md5: any = await fileToData(file)
  const checksum = md5.toString(CryptoJS.enc.Base64)
  return checksum
}

//********** STEP 1 **********//

export const getPresignedUrl = async (image: any) => {
  const file = await fileToData(image)

  const sum = await fileCheckSum(image)

  const body = {
    file: {
      filename: image.name,
      byte_size: image.size,
      checksum: sum,
      content_type: image.type,
      metadata: {
        'message': 'film poster test'
      }
    }
  }

  const presignedFileParams = await postData('https://epk-be.herokuapp.com/api/v1/presigned_url', body)
  return presignedFileParams;
}

//********** STEP 2 **********//

export const putToAWS = async (fileParams: any, image: any) => {
  const s3PutOptions = {
    method: 'PUT',
    headers: fileParams.direct_upload.headers,
    body: image,
  }

  let awsRes = await fetch(fileParams.direct_upload.url, s3PutOptions)
  if (awsRes.status !== 200) return awsRes
}

//********** STEP 3 **********//

export const postToDatabase = async (fileParams: any, epk: any, endpoint: string) => {
  const cookie: any = Cookies.get('csrf-token')

  let usersPostOptions: any = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": cookie
    },
    credentials: 'include',
    body: JSON.stringify({
      film_epk_id: epk.id,
      blob_signed_id: fileParams.blob_signed_id,
    }),
  }
  let res = await fetch(`https://epk-be.herokuapp.com/api/v1/${endpoint}`, usersPostOptions)
  if (res.status !== 200) return res

  let data = await res.json()
  return data
}


//********** STEP 3 FOR FILM TEAM & FILM STILLS **********//

export const postFilmMemberToDatabase = async (fileParams: any, filmMember: any, endpoint: string) => {
  const cookie: any = Cookies.get('csrf-token')

  let usersPostOptions: any = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": cookie
    },
    credentials: 'include',
    body: JSON.stringify({
      film_fam_id: filmMember,
      blob_signed_id: fileParams.blob_signed_id,
    }),
  }
  let res = await fetch(`https://epk-be.herokuapp.com/api/v1/${endpoint}`, usersPostOptions)
  if (res.status !== 200) return res

  let data = await res.json()
  return data
}

