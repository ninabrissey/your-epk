import { FilmEPK } from '../../types';

interface IHeaderImg {
	filmEPK: FilmEPK;
}

const HeaderImgDisplay = ({ filmEPK }: IHeaderImg) => {
	return (
		<section>
			{filmEPK?.attributes && (
				<img
					className="header-img"
					src={filmEPK.attributes.header_image_url}
					alt=""
				/>
			)}
		</section>
	);
};

export default HeaderImgDisplay;
