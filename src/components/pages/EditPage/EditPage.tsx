import {useEffect, useState} from 'react'
import {FilmEPK} from '../../../types'
import { getUser, patchData } from '../../../utils/apiCalls';
import "./EditPage.scss"
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';

// interface FilmProps { 
//   filmEPK: FilmEPK;
// }

const EditPage = () => {
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
  </main>
)

}


export default EditPage;