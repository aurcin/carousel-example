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

	const carouselClass = `carousel__item carousel__item--${current}`;

	return (
		<section className='carousel'>
			<div className={carouselClass}></div>
			<button
				className='btn carousel__button carousel__button--previous'
				onClick={onPrevious}
			>
				<i class='fas fa-angle-left'></i>
			</button>
			<button
				className='btn carousel__button carousel__button--next'
				onClick={onNext}
			>
				<i class='fas fa-angle-right'></i>
			</button>
		</section>
	);
};

export default Carousel;
