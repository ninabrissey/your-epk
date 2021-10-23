import {useEffect, useState} from 'react'
import { getUser, patchData, findEPK } from '../../../utils/apiCalls';
import { FilmEPK, Award, Press } from '../../../types'
import "./EditPage.scss"
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';

interface FilmProps {
  filmEPK: FilmEPK;
}

const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [awards, setAwards] = useState<Array<Award>>([]);
  const [presses, setPress] = useState<Array<Press>>([])

useEffect(() => {
  getUser(1)
    .then((data: any) => findEPK(data.included, '80'))
    .then((data: any) => {
      setFilm(data)
      setAwards(data.attributes.awards)
      setPress(data.attributes.press)
    })
    .catch(err => console.log(err))
  }, [])
  
  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 80).then(data => setFilm(data))
  }

  return (
    <main className='edit-page'>
      <HeaderContainer/>
      {/* <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo}/> */}
      <AwardsPressContainer awards={awards} presses={presses} addFilmInfo={addFilmInfo}/>
      <TrailerContainer />
      <FilmPosterContainer />
    </main>
  )
}

export default EditPage;