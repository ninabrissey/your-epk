import { FilmEPK } from '../../types';

interface IContactDisplay {
	filmEPK: FilmEPK;
}

const ContactDisplay = ({ filmEPK }: IContactDisplay) => {
	return (
		<section className="contact-container">
			<h2>Contact</h2>
			{filmEPK?.attributes && (
				<div>
					<p>{filmEPK.attributes.contact_name}</p>
					<p>{filmEPK.attributes.contact_number}</p>
					<p>{filmEPK.attributes.contact_email}</p>
					<p>{filmEPK.attributes.company_name}</p>
					<a href={filmEPK.attributes.website}>Website</a>
				</div>
			)}
		</section>
	);
};

export default ContactDisplay;
