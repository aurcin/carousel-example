import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

import './app.css';

import Carousel from './components/carousel';

const App = () => {
	return (
		<BrowserRouter>
			<ul className='navigation'>
				<li>
					<Link className='navigation__item' to='/1'>
						Variant 1
					</Link>
				</li>
			</ul>
			<div className='carousel__container'>
				<Switch>
					<Route path='/1' exact component={Carousel} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
