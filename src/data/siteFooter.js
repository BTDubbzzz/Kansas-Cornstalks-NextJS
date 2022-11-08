import bg from '@/images/backgrounds/footer-v1-bg.jpg';
import bg2 from '@/images/backgrounds/footer-v2-bg.jpg';
import arrow from '@/images/icon/right-arrow.png';
import logo from '@/images/resources/intelligent-logo-transparent-small.png';

export const socials2 = [
	{
		id: 1,
		icon: 'fab fa-facebook',
		href: '#',
	},
];

const footerData = {
	title: 'Subscribe our newsletter to get \n the latest news & updates.',
	arrow,
	logo,
	bg,
	bg2,
	address: '48 10h Street, Office 478 Road 5\n Berlin, CA 700156',
	checkText: 'I agree to the Privacy Policy.',
	email: 'infogamil@gmail.com',
	phone: '81 282 11 101',
	phoneHref: '123456789',
	callText: 'Schedule a free case evaluation. \n or call us at',
	socials: socials2,
	links: [
		{
			id: 1,
			text: 'Flooring',
			href: '#',
		},
		{
			id: 2,
			text: 'Wood Floor',
			href: '#',
		},
		{
			id: 3,
			text: 'Woodhard',
			href: '#',
		},
		{
			id: 6,
			text: 'Contact Us',
			href: '/contact',
		},
		{
			id: 7,
			text: 'Our Team',
			href: '/team',
		},
		{
			id: 8,
			text: 'Our Work',
			href: '/portfolio',
		},
		{
			id: 9,
			text: 'About Us',
			href: '/about',
		},
	],
	year: new Date().getFullYear(),
	bottomList: [
		{
			id: 1,
			text: 'About Site',
			href: '/about',
		},
	],
};

export default footerData;
