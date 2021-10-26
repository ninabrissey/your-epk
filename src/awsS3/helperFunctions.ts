import { postData } from '../utils/apiCalls';
import CryptoJS from 'crypto-js';
const yourModuleName = require('crypto-js');

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


export const postToAWS = async (image: any) => {
  //first I want to run my fileToData which returns a Promise
  // const file = await fileToData(image)

  // const sum = await fileCheckSum(image)
  // console.log('filmPoster', image)

  // //when that cowboy resolves, I want to use it's guts to make the options object that will be POSTed to the backend to acquire the presignedURL. This will also be asychronous

  // const body = {
  //   file: {
  //     filename: image.name,
  //     byte_size: image.size,
  //     checksum: sum,
  //     content_type: image.type,
  //     metadata: {
  //       'message': 'film poster test'
  //     }
  //   }
  // }

  // const presignedFileParams = await postData('https://epk-be.herokuapp.com/api/v1/presigned_url', body)

  const presignedFileParams: any = getPresignedUrl(image)

  //once we have our presignedURL response from above 
  // const s3PutOptions = {
  //   method: 'PUT',
  //   headers: presignedFileParams.direct_upload.headers,
  //   body: image,
  // }

  // let awsRes = await fetch(presignedFileParams.direct_upload.url, s3PutOptions)
  // if (awsRes.status !== 200) return awsRes

  const resFromAWS = putToAWS(presignedFileParams, image)


  let usersPostOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // film_epk_id: filmEPK.id,
      blob_signed_id: presignedFileParams.blob_signed_id,
    })
  }
  let res = await fetch('https://epk-be.herokuapp.com/api/v1/movie_posters', usersPostOptions)
  if (res.status !== 200) return res

  let data = await res.json()
  console.log(data)
  // We need to pass this value to state 
  // setPoster(data.movie_poster_url);
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
  let usersPostOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      film_epk_id: epk.id,
      blob_signed_id: fileParams.blob_signed_id,
    })
  }
  let res = await fetch(`https://epk-be.herokuapp.com/api/v1/${endpoint}`, usersPostOptions)
  if (res.status !== 200) return res

  let data = await res.json()
  return data
}