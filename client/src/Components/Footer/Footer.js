import React from 'react';
import './Footer.css';

function Footer(props) {
	return (
		<footer
			className="footer mt-auto py-3"
			style={{ backgroundColor: 'orange' }}
		>
			<p style={{ textAlign: 'center' }}>&copy; 2019 - Auto Cloud Inc.</p>
		</footer>
	);
}

export default Footer;
