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
					src={filmEPK.attributes.header_img}
					alt=""
				/>
			)}
		</section>
	);
};

export default HeaderImgDisplay;
