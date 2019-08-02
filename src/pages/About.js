import React from 'react';
import imgbanner from '../images/img-about.jpg';
import Navigation from '../json/navigation.json';

export const CardItems = ({item}) => {
		return (
			<div className="card col-md-6 col-lg-3 tc">
				<div className="card-img pb-3">
					<img src={require(`../images/${item.icon}`)} alt={item.alt}/>
				</div>
				<div className="card-box">
					<h4 className="card-title py-3 mbr-fonts-style display-5">
					{ item.text }</h4>
					<p className="mbr-text mbr-fonts-style display-7">
						{item.para}
					</p>
				</div>
			</div>
	 );	
}

const About = () => (
	<div className="row">
		<div className="about">
			<div className="banner-about">
				<img src={imgbanner} alt="{key.alt}"/>
			</div>
			<div className="container">
				<div className="row">
					{ Navigation.sidenav.map((item, index) => (<CardItems key={ index } item={item} />)) }
				</div>
			</div>
		</div>
	</div>
);

export default About ;