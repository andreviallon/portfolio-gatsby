import React from 'react';

import PortfolioCard from './portfolioCard';
import { Container, Row, Col } from 'react-grid-system';

const projects = [
    {
        title: 'Eventux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/event-app'
    },
    {
        title: 'React / Node.js Todo App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/react-node-todo-app'
    },
    {
        title: 'React Weather App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://jovial-williams-ca9530.netlify.app/',
        githubLink: 'https://github.com/andreviallon/weather-app'
    }
]

export default function portfolio() {
    return (
        <div>
            <Container>
                <h2 className="section-title">portfolio</h2>
                <Row gutterWidth={70}>
                    {projects.map((project, index) => (
                        <Col sm={12} md={12} lg={6} key={index}>
                            <PortfolioCard project={project}></PortfolioCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
