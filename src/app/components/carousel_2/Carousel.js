import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './carousel.css';

import CarouselItem from './CarouselItem';

const Carousel = (props) => {
	const [itemData, setItemdata] = useState({
		items: props.items,
		active: props.active,
		direction: '',
	});

	const { items, active, direction } = itemData;

	const generateItems = () => {
		const carouselItems = [];
		let level;
		const { length } = items;

		for (let i = active - 2; i < active + 3; i++) {
			let index = i;
			if (i < 0) {
				index = length + i;
			} else if (i > length) {
				index = i % length;
			}

			level = active - i;
			carouselItems.push(
				<CarouselItem key={index} id={items[index]} level={level} />,
			);
		}

		return carouselItems;
	};

	const clickNext = () => {
		setItemdata({
			...itemData,
			direction: 'right',
			active: (active + 1) % items.length,
		});
	};

	const clickPrevious = () => {
		let newActive = active - 1;
		if (newActive < 0) {
			newActive = items.length - 1;
		}

		setItemdata({
			...itemData,
			direction: 'left',
			active: newActive,
		});
	};

	return (
		<div className='carousel--2'>
			<button
				className='btn carousel-1__button carousel-1__button--previous'
				onClick={clickPrevious}
			>
				<i className='fas fa-angle-left'></i>
			</button>
			<CSSTransition transitionName={direction}>
				<>{generateItems()}</>
			</CSSTransition>
			<button
				className='btn carousel-1__button carousel-1__button--next'
				onClick={clickNext}
			>
				<i className='fas fa-angle-right'></i>
			</button>
		</div>
	);
};

export default Carousel;
