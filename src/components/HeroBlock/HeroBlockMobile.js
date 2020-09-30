import React from 'react';
import './HeroBlockMobile.scss';

const HeroBlockMobile = ({title, links, logos}) => {
	const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero-mobile-partners-item" key={i}/>);
	const navItems = links.map((link, i) => <a href={link.href} className="hero-mobile-navigation-item" key={i}>{link.title}</a>);
	
	return (
		<section className="hero-mobile">
			<div className="container">
				<div className="hero-mobile-partners">
					{logosImages}
				</div>
				<nav className="hero-mobile-navigation">
					{navItems}
				</nav>
				<h1 className="hero-mobile-title">{title}</h1>
				<div className="super-container">
					<a href="#index" className="hero-mobile-link">Отследить</a>
				</div>
			</div>
		</section>
	);
};

export default HeroBlockMobile;