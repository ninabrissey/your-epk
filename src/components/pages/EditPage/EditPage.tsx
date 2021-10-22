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

useEffect(() => {
  getUser(1)
    .then((data: any) => setFilm(data.included[0]))
    .catch(err => console.log(err))
  }, [])
  
  const addFilmInfo: (filmInfo: object, id: number) => void = (filmInfo: object, id: number) => {
    patchData(filmInfo, id)
    .then((data: any) => setFilm(data.included[0]))
    .catch(err => console.log(err))
  }

  return (
    <main className='edit-page'>
      <HeaderContainer/>
      <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo}/>
      <TrailerContainer />
    </main>
  )
}

export default EditPage;