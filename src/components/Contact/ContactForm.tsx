import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const ContactForm = ({ filmEPK, addFilmInfo, setIsEditing }: any) => {
	const [name, setName] = useState<string>('');
	const [phoneNum, setPhoneNum] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [company, setCompany] = useState<string>('');
	const [website, setWebsite] = useState<string>('');

	const checkFormData = () => {
		// if (filmEPK?.attributes) {
			// setName(filmEPK.attributes.contact_name);
			// setPhoneNum(filmEPK.attributes.contact_number);
			// setEmail(filmEPK.attributes.contact_email);
			// setCompany(filmEPK.attributes.company_name);
			// setWebsite(filmEPK.attributes.website);
			if (filmEPK.attributes.contact_name) {
				setName(filmEPK.attributes.contact_name);
			}
			
			if (filmEPK.attributes.contact_number) {
				setPhoneNum(filmEPK.attributes.contact_number);
			}

			if (filmEPK.attributes.contact_email) {
				setEmail(filmEPK.attributes.contact_email);
			}

			if (filmEPK.attributes.company_name) {
				setCompany(filmEPK.attributes.company_name);
			}

			if (filmEPK.attributes.website) {
				setWebsite(filmEPK.attributes.website);
			}
		// }
	};

	useEffect(() => {
		checkFormData();
	}, [filmEPK]);

	const handleSubmit = () => {
		const currentContact = {
			contact_name: name,
			contact_number: phoneNum,
			contact_email: email,
			company_name: company,
			website: website,
		};
		addFilmInfo(currentContact);
		setIsEditing(false);
	};

	// const clearForm = () => {
	// 	setName('');
	// 	setPhoneNum('');
	// 	setEmail('');
	// 	setCompany('');
	// 	setWebsite('');
	// };

	return (
		<section className="contact-form">
			<h2>Contact</h2>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<TextField
					id="outlined-basic"
					label="Phone Number"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="phoneNum"
					value={phoneNum}
					onChange={(e) => setPhoneNum(e.target.value)}
				/>
				<TextField
					id="outlined-basic"
					label="Email"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<TextField
					id="outlined-basic"
					label="Company"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="company"
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				/>
				<TextField
					id="outlined-basic"
					label="Website"
					variant="outlined"
					size="small"
					margin="dense"
					type="text"
					name="website"
					value={website}
					onChange={(e) => setWebsite(e.target.value)}
				/>
				<Button variant="text" onClick={handleSubmit}>
					save
				</Button>
			</FormControl>
		</section>
	);
};

export default ContactForm;
