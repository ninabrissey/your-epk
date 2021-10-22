import { useEffect, useState } from 'react'
import { getUser, patchData } from '../../../utils/apiCalls';
import { FilmEPK } from '../../../types'
import "./EditPage.scss"
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';

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

  return (
    <main className='edit-page'>
      <HeaderContainer/>
      <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo}/>
      <TrailerContainer />
      <FilmPosterContainer />
    </main>
  )
}

export default EditPage;