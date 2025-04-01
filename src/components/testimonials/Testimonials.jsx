import React from 'react';
import './Testimonials.css';

import Image2 from '../../assets/reebu.svg'
import Image3 from '../../assets/professor.svg'
import Image4 from '../../assets/sumith.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image2,
			title: "Reebu Mukherjee",
			subtitle: "Software Engineer @ BestDoc",
			comment: "I worked at Bestdoc with Dinesh. He was really smart in coming up with solutions on his own. He showed good knowledge in DB design and SQL. He was comfortable in solving problems in Java and spring boot.",
		},
		{
			id: 2,
			image: Image3,
			title: "Dr. Khomsun Singhirunnusorn",
			subtitle: "Professor @ University of Central Missouri",
			comment: "Dinesh performed leading, and hard working to achieve the excellent database application project. He also friendly and has good communication skills.",
		},
		{
			id: 3,
			image: Image4,
			title: "Sumith KK",
			subtitle: "Frontend Developer @ BestDoc",
			comment: "I have worked with him around 2 years. He is Excellent in backend technologies ",
		},
		
		
	];

	return (
		<section className="testimonials container section" id="testimonials">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials