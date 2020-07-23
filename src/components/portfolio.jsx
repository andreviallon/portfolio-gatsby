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
        description: 'The goal of this project was to create a big scale full stack application. Ranging from user authentication, permission and creating rest endpoints on the backend. And on the frontend focusing on advanced form validation, state management and creating a clean and intuitive user interface.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/event-app',
        imageName: "eventux-thumbnail"
    },
    {
        title: 'Todo App',
        description: 'This CRUD application allowed me to familiarize myself with various backend technologies, creating a webserver, rest endpoints and working with databases.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/react-node-todo-app',
        imageName: "todo-app-thumbnail"
    },
    {
        title: 'Weather App',
        description: 'Simple weather app to enhance my frontend skills.',
        websiteLink: 'https://jovial-williams-ca9530.netlify.app/',
        githubLink: 'https://github.com/andreviallon/weather-app',
        imageName: "weather-app-thumbnail"
    }
]

export default function Portfolio() {
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: {relativeDirectory: {eq: "thumbnails"}}) {
                nodes {
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

    const getImageData = (imageName) => {
        const image = data.images.nodes.filter(image => image.name === imageName);
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
                                <PortfolioCard project={project} image={getImageData(project.imageName)}></PortfolioCard>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}
