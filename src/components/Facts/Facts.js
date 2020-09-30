import React from 'react';

import SwiperCore, {coverflowEffect, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {EffectCoverflow} from 'swiper';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import SlideFacts from "./SlideFacts";
import './Facts.scss'

SwiperCore.use([Navigation, Pagination])
SwiperCore.use([EffectCoverflow])

const Facts = ({title, slides}) => {
	const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
		<SlideFacts item={slideInfo}/>
	</SwiperSlide>);
	
		return (
			<section className="facts container">
				<h2 id="facts" className="facts-title">{title}</h2>
				<div className="swiper-button-prev"/>
				<Swiper
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					pagination={{
						el: '.facts-pagination',
						clickable: true,
						renderBullet: function (index, className) {
							return `<span class="facts-pagination-bullet ${className}"></span>`;
						},
					}}
					spaceBetween={40}
					slidesPerView={3}
					slidesPerGroup={3}
					//centeredSlides={true}
				>
					{factsSlides}
				</Swiper>
				<div className="swiper-button-next"/>
				<div className="facts-pagination"/>
			</section>
		);
};

export const FactsMobile = ({title, slides}) => {
	const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
		<SlideFacts item={slideInfo}/>
	</SwiperSlide>);

		return (
			<section className="facts container">
				<h2 id="facts" className="facts-title">{title}</h2>
				<div className="swiper-button-prev"/>
				<Swiper effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					spaceBetween={0}
					initialSlide={2}
					coverflowEffect={{
						rotate: 0,
						stretch: 50,
						depth: 200,
						modifier: 1,
						slideShadows: false
					}}

					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}

					pagination={{
						el: '.facts-pagination',
						clickable: true,
						renderBullet: function (index, className) {
							return `<span class="facts-pagination-bullet ${className}"></span>`;
						},
					}
				}
				>
				
					{factsSlides}
				</Swiper>
				<div className="swiper-button-next"/>
				<div className="facts-pagination"/>
			</section>
		);
};

export default Facts;