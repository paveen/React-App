import React from 'react';
import Sidemenu from '../components/Sidemenu';
function Home(props){
	console.log(props);
	return (
		<div className="row">
			<div className="col-md-3 sidebar">
				<Sidemenu/>
			</div>
			<div className="col-md-9 content">
				{props.children}
			</div>
		</div>
	)
}
export default Home;
