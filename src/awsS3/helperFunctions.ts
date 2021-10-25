import { postData } from '../utils/apiCalls';

const fileToData = (file: any) => {
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

const fileCheckSum = async (file: any) => {
  const md5: any = await fileToData(file)
  const checksum = md5.toString(CryptoJS.enc.Base64)
  return checksum
}


export const postToAWS = async (image: any) => {
  //first I want to run my fileToData which returns a Promise
  const file = await fileToData(image)

  const sum = await fileCheckSum(image)
  console.log('filmPoster', image)

  //when that cowboy resolves, I want to use it's guts to make the options object that will be POSTed to the backend to acquire the presignedURL. This will also be asychronous

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

  //once we have our presignedURL response from above 
  const s3PutOptions = {
    method: 'PUT',
    headers: presignedFileParams.direct_upload.headers,
    body: image,
  }

  let awsRes = await fetch(presignedFileParams.direct_upload.url, s3PutOptions)
  if (awsRes.status !== 200) return awsRes


}