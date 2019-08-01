import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Manage from '../pages/Manage-account'
import Reports from '../pages/Reports';
import Ecommerce from '../pages/E-commerce';
import Settings from '../pages/Settings';
const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" render={()=><App><Home><Dashboard /></Home></App>}/>
			<Route exact path="/about" render={()=><App><About /></App>}/>
			<Route exact path="/services" render={()=><App><Services /></App>}/>
			<Route exact path="/product" render={()=><App><Product /></App>}/>
			<Route exact path="/contact" render={()=><App><Contact /></App>}/>
			<Route exact path="/dashboard" render={()=><App><Home><Dashboard /></Home></App>}/>
			<Route exact path="/manage" render={()=><App><Home><Manage /></Home></App>}/>
			<Route exact path="/reports" render={()=><App><Home><Reports /></Home></App>}/>
			<Route exact path="/ecommerce" render={()=><App><Home><Ecommerce /></Home></App>}/>
			<Route exact path="/settings" render={()=><App><Home><Settings /></Home></App>}/>
		</Switch>
	</Router>
  );
export default Routes;