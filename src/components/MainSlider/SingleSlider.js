import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from '../Reuseable/Link';
import TextSplit from '../Reuseable/TextSplit';
import bg1 from '@/images/backgrounds/lawn-hi-res.jpeg';
import WorkOne from '../Work/WorkOne';

const SingleSlider = ({ slide = {}, sliderTwo = false }) => {
	const { bg, text, title } = slide;

	return (
		<>
			<div
				className="image-layer"
				style={{
					backgroundImage: `url(${bg1.src})`,
				}}
			></div>
			<Container>
				<Row>
					<Col xl={12}>
						<div
							className={`main-slider-one__inner${!sliderTwo ? ' text-center' : ''}`}
						>
							{sliderTwo && <div className="border-box"></div>}
							<p className="main-slider-one__text">{text}</p>
							<TextSplit text={title} as="h2" className="main-slider-one__title" />
							<div>
								<WorkOne></WorkOne>
							</div>
							{/* <div className="main-slider-one__btn">
								<Link href="/projects" className="thm-btn">
									{sliderTwo ? 'Find Product' : 'See our work'}
								</Link>
							</div> */}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SingleSlider;
