import React from 'react';
import PortfolioCard from './portfolioCard';

import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

const projects = [
    {
        title: 'Eventux (work in progress)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/event-app',
        imageId: "54898cee-6c8f-5bfb-a8b3-bf5f4711a406"
    },
    {
        title: 'React / Node.js Todo App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/react-node-todo-app',
        imageId: "a497b465-d2a1-5f24-a53b-db77a1268cab"
    },
    {
        title: 'React Weather App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://jovial-williams-ca9530.netlify.app/',
        githubLink: 'https://github.com/andreviallon/weather-app',
        imageId: "492805b5-bac2-5ed5-a407-81035dee6fdb"
    }
]

export default function portfolio() {
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: {relativeDirectory: {eq: "thumbnails"}}) {
                nodes {
                    id
                    name
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

    const getImageData = (id) => {
        const image = data.images.nodes.filter(image => image.id === id);
        return image[0].childImageSharp.fluid;
    }

    return (
        <div>
            <Container>
                <h2 className="section-title">portfolio</h2>
                <Row gutterWidth={70}>
                    {projects.map((project, index) => (
                        <Col sm={12} md={12} lg={6} key={index}>
                            <PortfolioCard project={project} image={getImageData(project.imageId)}></PortfolioCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
