import React from 'react';
import imgbanner from '../images/img-about.jpg';
import iconabout1 from '../images/icon-about-1.png';
import iconabout2 from '../images/icon-about-2.png';
import iconabout3 from '../images/icon-about-3.png';
const About = () => {
	return (
		<div className="row">
			<div className="about">
				<div className="banner-about">
					<img src={imgbanner} alt="about banner"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="card col-md-6 col-lg-3 tc">
							<div className="card-img pb-3">
								<img src={iconabout1} alt="icon"/>
							</div>
							<div className="card-box">
								<h4 class="card-title py-3 mbr-fonts-style display-5">
									Creativity</h4>
								<p class="mbr-text mbr-fonts-style display-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat. Repellat laudantium eligendi ab consequatur animi quidem minus aperiam, eum reiciendis.
								</p>
							</div>
						</div>

						<div className="card col-md-6 col-lg-3 tc">
							<div className="card-img pb-3">
								<img src={iconabout2} alt="icon"/>
							</div>
							<div className="card-box">
								<h4 class="card-title py-3 mbr-fonts-style display-5">
								Worldwide</h4>
								<p class="mbr-text mbr-fonts-style display-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat. Repellat laudantium eligendi ab consequatur animi quidem minus aperiam, eum reiciendis.
								</p>
							</div>
						</div>

						<div className="card col-md-6 col-lg-3 tc">
							<div className="card-img pb-3">
								<img src={iconabout3} alt="icon"/>
							</div>
							<div className="card-box">
								<h4 class="card-title py-3 mbr-fonts-style display-5">
								Unique Styles</h4>
								<p class="mbr-text mbr-fonts-style display-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat. Repellat laudantium eligendi ab consequatur animi quidem minus aperiam, eum reiciendis.
								</p>
							</div>
						</div>


						<div className="card col-md-6 col-lg-3 tc">
							<div className="card-img pb-3">
								<img src={iconabout3} alt="icon"/>
							</div>
							<div className="card-box">
								<h4 class="card-title py-3 mbr-fonts-style display-5">
								Unique Styles</h4>
								<p class="mbr-text mbr-fonts-style display-7">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat. Repellat laudantium eligendi ab consequatur animi quidem minus aperiam, eum reiciendis.
								</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
export default About ;