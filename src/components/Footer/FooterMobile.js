import React from 'react';
import './FooterMobile.scss';

const FooterMobile = ({partners, links, author, designer}) => {
	const partnersLogos = partners.map((logo, i) => <img key={i} src={logo} alt={'partner logo'}
																											 className="footer-partners-item"/>);
	const navLinks = links.map((link, i) => <a href={link.href} key={i} className={'footer-mobile-nav-link'}>{link.title}</a>);
    
	return (
		<footer className="footer-mobile">
			<div className="container-mobile">
				<div className="footer-mobile-partners">
					{partnersLogos}
				</div>
				
				<div className="footer-mobile-nav">
					{navLinks}
				</div>
					
				<div>
                    <p className="footer-mobile-nav-text">
						Сайт был разработан <span className="text-yellow">{author}</span> в учебных целях, 
                        в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-yellow">{designer}</span>.
					</p>
				</div>
				
				<p className="footer-mobile-text">
					2020, Все права защищены
				</p>
				<p className="footer-mobile-text">
					Согласие на обработку персональных данных <br/>
					Политика конфиденциальности
				</p>
			</div>
		</footer>
	);
};

export default FooterMobile;