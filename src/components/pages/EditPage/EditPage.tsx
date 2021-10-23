import { useEffect, useState } from 'react'
import { getUser, patchData, getEPK  } from '../../../utils/apiCalls';
import { FilmEPK } from '../../../types';
import { Link } from 'react-router-dom';
import "./EditPage.scss";
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import SynopsisContainer from '../../Synopsis/SynopsisContainer';
import SynopsisForm from '../../Synopsis/SynopsisForm';

const getData = () => {
  return fetch('https://epk-be.herokuapp.com/api/v1/film_epk/133')
}


const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('')

  console.log('title', title)

  useEffect(() => {
    getEPK(epk_id)
      .then((data: any) => {
        setFilm(data)
        setTitle(formatTitle(data.attributes.movie_title))
      })
      .catch(err => console.log(err))
    console.log(film)

    getData()
      .then(res => res.json())
      .then(data => setFilm(data))
    }, [])
    
    
    console.log('EPK: ', film)

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
        <SynopsisContainer filmEPK={film} addFilmInfo={addFilmInfo} />
      </main>
    </div>
  )
}

export default EditPage;