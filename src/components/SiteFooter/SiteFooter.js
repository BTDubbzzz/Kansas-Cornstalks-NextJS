import footerData from '@/data/siteFooter';
import { Link, TextSplit } from '@/Reuseable';
import handleSubmit from '@/utils/handleSubmit';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const {
	bg,
	title,
	arrow,
	checkText,
	logo,
	address,
	email,
	year,
	links,
	socials,
	bottomList,
} = footerData;

const SiteFooter = () => {
	const onSubmit = (data) => console.log(data);

	return (
		<footer className="footer-one">
			<div
				className="footer-one__bg"
				style={{ backgroundImage: `url(${bg.src})` }}
			></div>
		</footer>
	);
};

export default SiteFooter;
