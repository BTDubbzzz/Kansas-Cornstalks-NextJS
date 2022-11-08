import Header from '@/components/Header/Header';
import Layout from '@/components/Layout/Layout';
import ProjectsOne from '@/components/Projects/ProjectsOne';
import PageHeader from '@/components/Reuseable/PageHeader';
import SiteFooterTwo from '@/components/SiteFooter/SiteFooterTwo';
import React from 'react';

const Projects = () => {
	return (
		<Layout pageTitle="Projects">
			<Header className="main-header--one--two" />
			<PageHeader title="Projects" />
			<ProjectsOne className="projects-one--protfolio" />
			<SiteFooterTwo />
		</Layout>
	);
};

export default Projects;
