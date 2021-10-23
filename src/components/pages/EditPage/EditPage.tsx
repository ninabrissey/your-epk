import { useEffect, useState } from 'react'
import { getUser, patchData, findEPK, getEPK } from '../../../utils/apiCalls';
import { FilmEPK } from '../../../types';
import { Link } from 'react-router-dom';
import "./EditPage.scss";
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';


const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('')

  console.log('title', title)

  useEffect(() => {
    getEPK(epk_id)
      .then(data => {
        setFilm(data)
        setTitle(formatTitle(data.data.attributes.movie_title))
      })
      .catch(err => console.log(err))
  }, [])



  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 77).then(data => setFilm(data))
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
        <TrailerContainer />
        <FilmPosterContainer />
      </main>
    </div>
  )
}

export default EditPage;