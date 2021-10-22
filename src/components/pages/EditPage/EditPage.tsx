import {useEffect, useState} from 'react'
import { getUser, patchData } from '../../../utils/apiCalls';
import { FilmEPK } from '../../../types'
import "./EditPage.scss"
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';

interface FilmProps { 
  filmEPK: FilmEPK;
}

const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK)

// useEffect(() => {
//   getUser(1)
//     .then((data: any) => setFilm(data.included[0].attributes))
//     // .then((data: any) => console.log(data.included[0].attributes))
//     .catch(err => console.log(err))
//     console.log(film)
//   }, [])
  
  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 77).then(data => setFilm(data))
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
    <HeaderContainer />
    <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo}/>
    <TrailerContainer />
  </main>
)

// const postFilmInfo = (filminfo) => {
// postData(filmInfo)
// the response will update state
// This will be passed back up to the edit page
// We will then put the response in state
//   }
}

export default EditPage;