import { FilmEPK } from '../../types';
import { useEffect, useState } from 'react';
import { getEPK } from '../../utils/apiCalls';

interface IHeaderImg {
	filmEPK: FilmEPK;
	// headerImg: string;
	epk_id: any
}

const HeaderImgDisplay = ({ filmEPK, epk_id }: IHeaderImg) => {
	const [image, setImage] = useState<string>('')

	useEffect(() => {
		getEPK(epk_id)
			.then(data => setImage(data.data.attributes.header_image_url))
	},[])

	return (
		<section className="header-image-render">
			{filmEPK?.attributes && (
				<img
					className="header-image"
					src={image}
					alt=""
				/>
			)}
		</section>
	);
};

export default HeaderImgDisplay;
