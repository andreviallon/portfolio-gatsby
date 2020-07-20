import React, { useRef, useEffect } from 'react';
import PortfolioCard from './portfolioCard';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './portfolio.scss';

const projects = [
    {
        title: 'Eventux (work in progress)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/event-app',
        imageId: "54898cee-6c8f-5bfb-a8b3-bf5f4711a406"
    },
    {
        title: 'Todo App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/react-node-todo-app',
        imageId: "a497b465-d2a1-5f24-a53b-db77a1268cab"
    },
    {
        title: 'Weather App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        websiteLink: 'https://jovial-williams-ca9530.netlify.app/',
        githubLink: 'https://github.com/andreviallon/weather-app',
        imageId: "492805b5-bac2-5ed5-a407-81035dee6fdb"
    }
]

export default function Portfolio() {
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
    
    gsap.registerPlugin(ScrollTrigger);

    let portfolio = useRef(null);
    let portfolioHeader = useRef(null);
    let portfolioCards = useRef(null);

    useEffect(() => {
        TweenMax.to(portfolio, 0, { css: { visibility: 'visible' } });

        gsap.from(portfolioHeader.children[0], .6, {
            y: 55,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: portfolioHeader,
                start: "top 60%"
            }
            
        });

        gsap.from(portfolioCards, 1, {
            y: 50,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: portfolioCards,
                start: "top 60%"
            }
        });
    });

    const getImageData = (id) => {
        const image = data.images.nodes.filter(image => image.id === id);
        console.log('image =>', image);
        return image[0].childImageSharp.fluid;
    }

    return (
        <div className="portfolio" ref={el => portfolio = el}>
            <Container>
                <div className="hero-content-line" ref={el => portfolioHeader = el}>
                    <h2 className="section-title">portfolio</h2>
                </div>
                <div className="section-container" ref={el => portfolioCards = el}>
                    <Row gutterWidth={70}>
                        {projects.map((project, index) => (
                            <Col sm={12} md={12} lg={6} key={index}>
                                <PortfolioCard project={project} image={getImageData(project.imageId)}></PortfolioCard>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}
