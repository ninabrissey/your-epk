import { FilmEPK } from '../../types';
import ContactDisplay from '../Contact/ContactDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IHeaderDisplay {
	filmEPK: FilmEPK;
	// setIsEditingHeaderImg: any;
	// setIsEditingHeaderDesc: any;
}

const HeaderDisplay = ({
	filmEPK,
}: // setIsEditingHeaderImg,
// setIsEditingHeaderDesc,
IHeaderDisplay) => {
	return (
		<section className="header-container">
			{/* {filmEPK?.attributes && (
				<img
					className="header-img"
					src={filmEPK.attributes.header_img}
					alt=""
				/>
			)} */}

			<div className="header-info-container">
				<div>
					{filmEPK?.attributes && <h1>{filmEPK.attributes.movie_title}</h1>}

					{/* <Fab
						color="secondary"
						aria-label="edit"
						onClick={() => setIsEditingHeaderDesc()}
					>
						<EditIcon />
					</Fab> */}

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
