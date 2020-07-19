import React, { useState } from 'react';

import './carousel.css';

const Carousel = () => {
	const [items, setItems] = useState({
		length: 3,
		current: 1,
	});

	const { current, length } = items;

	const onNext = () => {
		let next = current + 1;
		if (next > length) {
			next = 1;
		}
		setItems({
			length,
			current: next,
		});
	};

	const onPrevious = () => {
		let next = current - 1;
		if (next <= 0) {
			next = length;
		}
		setItems({
			length,
			current: next,
		});
	};

	const carouselClass = `carousel-1__item carousel-1__item--${current}`;

	return (
		<>
			<div className={carouselClass}></div>
			<button
				className='btn carousel-1__button carousel-1__button--previous'
				onClick={onPrevious}
			>
				<i className='fas fa-angle-left'></i>
			</button>
			<button
				className='btn carousel-1__button carousel-1__button--next'
				onClick={onNext}
			>
				<i className='fas fa-angle-right'></i>
			</button>
		</>
	);
};

export default Carousel;
