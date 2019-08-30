import React from 'react';
import SBanner from '../images/img-service.jpg';
import SData from '../json/service_data.json';
const Service = () => (
	<div className="row">
		<div className="about">
		{SData.service_page.map((SDetails, index) => {
					return <div>
			<div className="banner-about">
				<h2>{SDetails.banner_title}</h2>
				<p>{SDetails.banner_text}</p>
				<img src={SBanner} alt="{key.alt}"/>
			</div>
			<div className="service-data">
				<div className="container">
					<div className="row">
						<div className="whatwedo">
							<h3>{SDetails.whatwedo}</h3>
							<p>{SDetails.whatwedo_text}</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-4">
							<i class="fas fa-atom"></i>
							<h5 className="tc">{SDetails.para}</h5>
							<p className="tc">{SDetails.text}</p>
						</div>
						<div className="col-md-4 mb-4">
							<i class="fas fa-laptop-code"></i>
							<h5 className="tc">{SDetails.para}</h5>
							<p className="tc">{SDetails.ptext}</p>
						</div>
						<div className="col-md-4 mb-4">
							<i class="fas fa-sitemap"></i>
							<h5 className="tc">{SDetails.para}</h5>
							<p className="tc">{SDetails.ptext}</p>
						</div>
						<div className="col-md-4 mb-4">
							<i class="fas fa-sitemap"></i>
							<h5 className="tc">{SDetails.para}</h5>
							<p className="tc">{SDetails.ptext}</p>
						</div>
						<div className="col-md-4 mb-4">
							<i class="fas fa-laptop-code"></i>
							<h5 className="tc">{SDetails.para}</h5>
							<p className="tc">{SDetails.ptext}</p>
						</div>
						<div className="col-md-4 mb-4">
							<i class="fas fa-atom"></i>
							<h5 className="tc">{SDetails.para}</h5>
							<p className="tc">{SDetails.text}</p>
						</div>
					</div>
				</div>

				<div className="service-bottom-img">
					<div className="container-fluid">
						<div className="row">
							<div className="dflex">
								<h5>{SDetails.bottom_heading}</h5>
								<p>{SDetails.bottom_text}</p>
								<div className="btn-outline-white">
									Call Us
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

})
}	
</div>
</div>
);

export default Service ;