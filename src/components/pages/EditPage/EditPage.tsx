import {useEffect, useState} from 'react'
import { getEPK, patchData, postData } from '../../../utils/apiCalls';
import { FilmEPK, Award, Press } from '../../../types'
import { Link } from 'react-router-dom';
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import { filterIncluded } from '../../../utils/cleanData';
import "./EditPage.scss"

// interface FilmProps {
//   filmEPK: FilmEPK;
// }

const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('')
  const [awards, setAwards] = useState<Array<Award>>([]);
  const [presses, setPress] = useState<Array<Press>>([])

useEffect(() => {
  getEPK(epk_id)
    .then((data: any) => {
      setFilm(data.data)
      // console.log(data.data)
      // setTitle(formatTitle(data.attributes.movie_title))
      setAwards(filterIncluded(data.included, 'award'))
      // need to build out cleaner functions to got through and grab all 
      // "awards", "press", "film_fam", "images"
    })
    .catch(err => console.log(err))
    console.log(film, 'film right here right now')
    console.log(awards)
  }, [])

  // test below for post to awards   
  // const newAward = {
  //   award: {
  //     film_epk_id: epk_id,
  //     name: "hi",
  //     award_type:"test",
  //   } 
  // }
  // useEffect(() => {
  //   postData('https://epk-be.herokuapp.com/api/v1/awards',newAward)
  //   .then(data => console.log(data, 'awards post'))
  // }, [])

  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 80).then(data => setFilm(data))
  }

  const formatTitle = (title: string) => {
    return title.split(' ').join('-')
  }

  return (
    <div>
      <Navigation onEdit={true} epk_id={epk_id} title={title} />
      <main className='edit-page'>
        <HeaderContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        {/* <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo} /> */}
        <AwardsPressContainer awards={awards} presses={presses} addFilmInfo={addFilmInfo} epk_id={epk_id} />
        <TrailerContainer />
        <FilmPosterContainer />
      </main>
    </div>
  )
}

export default EditPage;