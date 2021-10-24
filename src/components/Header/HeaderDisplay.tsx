import { FilmEPK } from '../../types';
import ContactDisplay from '../Contact/ContactDisplay';

interface IHeaderDisplay {
	filmEPK: FilmEPK;
}

const HeaderDisplay = ({ filmEPK }: IHeaderDisplay) => {
	return (
		<section className="header-container">
			{filmEPK?.attributes && (
				<img
					className="header-img"
					src={filmEPK.attributes.header_img}
					alt=""
				/>
			)}

			<div className="header-info-container">
				<div>
					{filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>}
					{filmEPK?.attributes && (
						<p>{filmEPK.attributes.header_description}</p>
					)}
				</div>

				<ContactDisplay filmEPK={filmEPK} />
			</div>
		</section>
	);
};

export default HeaderDisplay;
