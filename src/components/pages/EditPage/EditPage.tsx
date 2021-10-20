import {useEffect, useState} from 'react'
import { postData } from '../../../utils/apiCalls';
import AwardPressDisplay from '../../displays/AwardPressDisplay/AwardPressDisplay';
import AwardPressForm from '../../forms/HeaderForm/AwardPressForm/AwardPressForm';
import {FilmEPK} from '../../../types'
import "./EditPage.scss"

interface EPProps { 
  setAwardsPress: any;
  filmEPK: FilmEPK;
  setFilm: any
}

const EditPage = () => {
const [film, setFilm] = useState<FilmEPK>({} as FilmEPK)
// const [isEdittingHeader, setIsEdittingHeader] = useState(false)
const [isEdittingAwardsPress, setIsEdittingAwardsPress] = useState<boolean>(true)

const EditPageProps: EPProps = {
setAwardsPress: setIsEdittingAwardsPress,
filmEPK: film,
setFilm: setFilm
}

useEffect(() => {
  postData("https://epk-be.herokuapp.com/api/v1/film_epk", {
    user_id: "1",
    movie_title: "Racharia",
   }).then(data => setFilm(data.data))
   .catch(err => console.log(err))
  }, [])
  

return (

  <main className='edit-page'>
    {/* {isEdittingHeader && <HeaderForm />}
    {!isEdittingHeader && <HeaderDisplay />} */}
    {/* {isEdittingAwardsPress && <AwardPressForm {...props}/>} */}
    {isEdittingAwardsPress && <AwardPressForm {...EditPageProps}/>}
    {!isEdittingAwardsPress && <AwardPressDisplay />}  
  </main>
)

// const postFilmInfo = (filminfo) => {
// postData(filmInfo)
// the response will update state
// This will be passed to back up to the edit page
// We will thne put the response in state
//   }
}


export default EditPage;