import { useState, useEffect } from 'react';
import { postData, putData } from '../../utils/apiCalls';
// import { fileChecksum } from '../../awsS3/helperFunctions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CryptoJS from 'crypto-js'



const FilmPosterDisplay = ({ addFilmInfo }: any) => {
  const [filmPoster, setFilmPoster] = useState<any>({})
  const [postRes, setPostRes] = useState<any>()
  const [postResErr, setPostResErr] = useState('')

  useEffect(() => {
    if (filmPoster.size > 0) {
      doAllTheThings();
    }
    console.log('help!')
  }, [filmPoster])


  const fileToData = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (fileEvent: any) => {
        let binary = CryptoJS.lib.WordArray.create(fileEvent.target.result)
        console.log('binary', binary)
        const md5 = CryptoJS.MD5(binary)
        resolve(md5)
      }
      reader.onerror = () => {
        reject('oops, something went wrong with the file reader.')
      }
      console.log(reader)

      reader.readAsArrayBuffer(document.querySelector<any>('#test-input').files[0])
      // reader.readAsBinaryString(file);
      // reader.readAsDataURL(file)
    })
  }

  const fileCheckSum = async (file: any) => {
    const md5: any = await fileToData(file)
    const checksum = md5.toString(CryptoJS.enc.Base64)
    return checksum
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFilmPoster(document.querySelector<any>('#test-input').files[0])
  }

  const doAllTheThings = async () => {
    // const poster = await posterSet()
    // console.log(poster)

    //first I want to run my fileToData which returns a Promise
    const file = await fileToData(filmPoster)
    console.log(file)
    const sum = await fileCheckSum(filmPoster)
    console.log('filmPoster', filmPoster)

    //when that cowboy resolves, I want to use it's guts to make the options object that will be POSTed to the backend to acquire the presignedURL. This will also be asychronous

    const body = {
      file: {
        filename: filmPoster.name,
        byte_size: filmPoster.size,
        checksum: sum,
        content_type: filmPoster.type,
        metadata: {
          'message': 'film poster test'
        }
      }
    }

    const presignedFileParams = await postData('https://epk-be.herokuapp.com/api/v1/presigned_url', body)

    // console.log('pFP', presignedFileParams)

    //once we have our presignedURL response from above 
    const s3PutOptions = {
      method: 'PUT',
      headers: presignedFileParams.direct_upload.headers,
      body: filmPoster,
    }

    let awsRes = await fetch(presignedFileParams.direct_upload.url, s3PutOptions)
    // if (awsRes.status !== 200) return awsRes

    console.log(awsRes)


    //make a PUT to said presigned URL with 
  }

  // console.log(filmPoster)

  // const form = () => {
  //   var body = new FormData();
  //   body.append('file', filmPoster)
  //   return body;
  // }

  return (
    <form>
      <p>I am the film poster form</p>
      {/* <FormControl sx={{ m: 1, minWidth: 340 }}>
        <TextField
          id='outlined-multiline-flexible'
          aria-label='Img URL'
          // label='Img URL'
          type='file'
          name='filmPoster'
          value={filmPoster}
          onChange={(e) => setFilmPoster(e.target.value)}
        />
        <Button
          id='posterBtn'
          variant='text'
          onClick={handleSubmit}
        >save
        </Button>
      </FormControl> */}
      <input id='test-input' type="file" accept="image/*" />
      <button onClick={(event) => { handleSubmit(event) }}>Save</button>
    </form>
  )
}


export default FilmPosterDisplay;