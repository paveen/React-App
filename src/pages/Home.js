import React from 'react';
import Sidemenu from '../components/Sidemenu';


function Home(props){
	console.log(props);
	return (
		
		<div className="home">
		    
			<div className="col-md-4 sidebar">
				<Sidemenu/>
			</div>
			<div className="col-md-8 content">
				{props.children}
			</div>
		</div>
	)
}

export default Home;
