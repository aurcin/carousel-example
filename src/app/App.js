import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

import './app.css';

import Carousel1 from './components/carousel_1';
import Carousel2 from './components/carousel_2';

const App = () => {
	return (
		<BrowserRouter>
			<ul className='navigation'>
				<li>
					<Link className='navigation__item' to='/1'>
						Variant 1
					</Link>
					<Link className='navigation__item' to='/2'>
						Variant 2
					</Link>
				</li>
			</ul>
			<div className='carousel__container'>
				<Switch>
					<Route
						path='/2'
						render={(props) => (
							<Carousel2
								items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
								active={0}
								{...props}
							/>
						)}
					/>
					<Route path='/1' component={Carousel1} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
