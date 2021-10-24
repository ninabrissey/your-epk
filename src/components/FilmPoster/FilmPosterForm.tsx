import { useState } from 'react';
import { postData, putData } from '../../utils/apiCalls';
// import { fileChecksum } from '../../awsS3/helperFunctions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';



const FilmPosterDisplay = ({ addFilmInfo } : any) => {
  const [filmPoster, setFilmPoster] = useState<string>('')
  const [postRes, setPostRes] = useState<any>()
  const [postResErr, setPostResErr] = useState('')

const posterImageData = {
        file: {
            filename: "test_upload",
            byte_size: 92358,
            checksum: "UCo4+JMJDVuxmSASPcz+Wg==",
            content_type: 'image/jpeg',
            metadata: {
                message: "active_storage_test"
            }
        }
    }
  // response from post
  //   body = {
  //     "direct_upload": {
  //         "url": "https://your-epk-development.s3.us-west-2.amazonaws.com/uploads/9cec0105-35f8-4277-ba98-",
  //         "headers": {
  //             "Content-Type": "image/jpeg",
  //             "Content-MD5": "UCo4+JMJDVuxmSASPcz+Wg=="
  //         }
  //     },
  //     "blob_signed_id": "eyJfcmFpbHMiOnsibWVzc2"
  // }

  const handleSubmit = async () => {
    postData('https://epk-be.herokuapp.com/api/v1/presigned_url', posterImageData)
    .then(data => {
      setPostRes(data)
      return data
    })
    .then(data => {putData(
      filmPoster, "UCo4+JMJDVuxmSASPcz+Wg==", data.direct_upload.url )
      .then(res => {
        if  (res.status === 200) {
          const blob = {
            movie_poster_url: postRes.blob_signed_id
          }
          addFilmInfo(blob)
        }
      })
    })
  }
    // if(!postResErr) {
    //   console.log(postRes)
      // const checksum = await fileChecksum(filmPoster)
      // const checksum = "UCo4+JMJDVuxmSASPcz+Wg=="
      // const url = postRes.direct_upload.url
      // putData(filmPoster, checksum, url)
    //   .then(res => {
    //     if  (res.status === 200) {
    //       const blob = {
    //         movie_poster_url: postRes.blob_signed_id
    //       }
    //       addFilmInfo(blob)
    //     }
    //   })
    // }
    // setFilmPoster('')
  // }

  return (
    <form>
      <p>I am the film poster form</p>
      <FormControl sx={{ m: 1, minWidth: 340 }}>
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
          variant='text'
          onClick={handleSubmit}
          >save
        </Button>
      </FormControl>
  </form>
  )
}


export default FilmPosterDisplay;