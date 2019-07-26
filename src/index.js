import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import Routes from './components/routes';
import * as serviceWorker from './serviceWorker';

render(<Routes />, document.getElementById('root'));

serviceWorker.unregister();
