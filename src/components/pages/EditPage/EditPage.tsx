import { useEffect, useState } from 'react'
import { postData } from '../../../utils/apiCalls';
import { FilmEPK } from '../../../types'
import "./EditPage.scss"
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';

interface FilmProps {
  filmEPK: FilmEPK;
}

const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK)

  const Film: FilmProps = {
    filmEPK: film,
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
      <TrailerContainer />
      <FilmPosterContainer />
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