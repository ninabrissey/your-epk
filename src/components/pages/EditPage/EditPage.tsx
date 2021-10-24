import { useEffect, useState } from 'react';
import { patchData, getEPK } from '../../../utils/apiCalls';
import { FilmEPK, EPKData, Award, Press } from '../../../types';
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import { filterIncluded } from '../../../utils/cleanData';
import './EditPage.scss';
import SynopsisContainer from '../../Synopsis/SynopsisContainer';
import FilmDetailsContainer from '../../FilmDetails/FilmDetailsContainer';
import TaglinesContainer from '../../Taglines/TaglinesContainer';

// interface FilmProps {
//   filmEPK: FilmEPK;
// }

const EditPage = ({ epk_id }: any) => {
	const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
	const [title, setTitle] = useState('');
	const [awards, setAwards] = useState<Array<Award>>([]);
	const [presses, setPress] = useState<Array<Press>>([]);

	useEffect(() => {
		getEPK(epk_id)
			.then((data: EPKData) => {
				setFilm(data.data);
				setTitle(formatTitle(data.data.attributes.movie_title));
				setAwards(filterIncluded(data.included, 'award'));
				// function will need to filter "awards", "press", "film_fam", "images"
			})
			.catch((err) => console.log(err));
	}, []);

	// console.log('filmEPK in editPage: ', film)

	const addFilmInfo = (filmInfo: object) => {
		patchData(filmInfo, 137).then((data) => setFilm(data.data));
	};

	const formatTitle = (title: string) => {
		return title.split(' ').join('-');
	};

	return (
		<div>
			<Navigation onEdit={true} epk_id={epk_id} title={title} />
			<main className="edit-page">
				<HeaderContainer filmEPK={film} addFilmInfo={addFilmInfo} />
				{/* <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo} /> */}
				<AwardsPressContainer
					awards={awards}
					presses={presses}
					addFilmInfo={addFilmInfo}
					epk_id={epk_id}
				/>
				<TrailerContainer filmEPK={film} addFilmInfo={addFilmInfo} />
				<div className="container-wrapper">
					<SynopsisContainer filmEPK={film} addFilmInfo={addFilmInfo} />
					<FilmPosterContainer filmEPK={film} addFilmInfo={addFilmInfo} />
				</div>
				<FilmDetailsContainer filmEPK={film} addFilmInfo={addFilmInfo} />
				<TaglinesContainer filmEPK={film} addFilmInfo={addFilmInfo} />
			</main>
		</div>
	);
};

export default EditPage;
