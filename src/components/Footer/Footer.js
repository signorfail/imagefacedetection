import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
            <container>
                <div>
                    <p className='footerText f6 center'>
                        © {new Date().getFullYear()} - App developed by Eugene Y <br>
                        </br>Current Version: 1.0.0 beta
                    </p>
                </div>
            </container>
        </footer>
	);
}

export default Footer;