import { useEffect, useState } from 'react';
import { FilmEPK } from '../../types';
import FilmPosterForm from '../FilmPoster/FilmPosterForm';
import FilmPosterDisplay from '../FilmPoster/FilmPosterDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmPoster {
	filmEPK: FilmEPK;
	addFilmInfo: any;
	loading: boolean
}

const FilmPosterContainer = ({ filmEPK, addFilmInfo }: IFilmPoster) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [poster, setPoster] = useState<string>('')
	const [hasEPK, setHasEPK] = useState<boolean>(false)

	// useEffect(() => {
	// 	setTimeout(() => {setPoster(filmEPK.attributes.movie_poster_url)}, 10000)
	

	// }, [])

  return (
		<div className='film-poster-container'> 
		{ !filmEPK.attributes ? <p>loading</p> :
			<div >
				{!isEditing &&
					<Fab color='secondary' aria-label='edit' onClick={() => setIsEditing(true)}>
						<EditIcon />
					</Fab>
				}
				{isEditing && <FilmPosterForm filmEPK={filmEPK} addFilmInfo={addFilmInfo} setPoster={setPoster} setIsEditing={setIsEditing} />}
				{!isEditing && <FilmPosterDisplay filmEPK={filmEPK} poster={poster}/> }
			</div> }
		</div>
  )

	// return (
	// 	<div className="film-poster-container">
	// 		{!isEditing && (
	// 			<Fab
	// 				color="secondary"
	// 				aria-label="edit"
	// 				onClick={() => setIsEditing(true)}
	// 			>
	// 				<EditIcon />
	// 			</Fab>
	// 		)}
	// 		{isEditing && (
	// 			<FilmPosterForm
	// 				filmEPK={filmEPK}
	// 				addFilmInfo={addFilmInfo}
	// 				setPoster={setPoster}
	// 			/>
	// 		)}
	// 		{!isEditing && <FilmPosterDisplay filmEPK={filmEPK} />}
	// 	</div>
	// );

	// const [isEditing, setIsEditing] = useState<boolean>(true);

	// return (
	// 	<div className="film-poster-container">
	// 		{!isEditing && (
	// 			<Fab
	// 				color="secondary"
	// 				aria-label="edit"
	// 				onClick={() => setIsEditing(true)}
	// 			>
	// 				<EditIcon />
	// 			</Fab>
	// 		)}
	// 		{isEditing && (
	// 			<FilmPosterForm
	// 				filmEPK={filmEPK}
	// 				addFilmInfo={addFilmInfo}
	// 				setIsEditing={setIsEditing}
	// 			/>
	// 		)}
	// 		{!isEditing && <FilmPosterDisplay filmEPK={filmEPK} />}
	// 	</div>
	// );
};

export default FilmPosterContainer;
