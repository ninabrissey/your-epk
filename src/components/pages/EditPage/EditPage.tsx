import { useEffect, useState } from 'react'
import { patchData, getEPK } from '../../../utils/apiCalls';
import { FilmEPK, EPKData } from '../../../types';
import { Link } from 'react-router-dom';
import "./EditPage.scss";
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import SynopsisContainer from '../../Synopsis/SynopsisContainer';
import FilmDetailsContainer from '../../FilmDetails/FilmDetailsContainer';


const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('')

  useEffect(() => {
    getEPK(epk_id)
      .then((data: EPKData) => {
        setFilm(data.data)
        setTitle(formatTitle(data.data.attributes.movie_title))
      })
      .catch(err => console.log(err))
  }, [])


  console.log('filmEPK in editPage: ', film)

  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 133).then(data => setFilm(data.data))
  }

  const formatTitle = (title: string) => {
    return title.split(' ').join('-')
  }

  return (
    <div>
      <Navigation onEdit={true} epk_id={epk_id} title={title} />
      <main className='edit-page'>
        <HeaderContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <TrailerContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <FilmPosterContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <SynopsisContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <FilmDetailsContainer filmEPK={film} addFilmInfo={addFilmInfo} />
      </main>
    </div>
  )
}

export default EditPage;