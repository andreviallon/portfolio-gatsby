import React, { useRef, useEffect } from 'react';
import PortfolioCard from './portfolioCard';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './portfolio.scss';

const projects = [
    {
        title: 'IP Address Tracker',
        description: 'Search for an IP address and get information about it, such as its location timezone and ISP. This app was built using Angular, NGXS and Leaflet.',
        websiteLink: 'https://ip-address-tracker-orcin.vercel.app/',
        githubLink: 'https://github.com/andreviallon/ip-address-tracker',
        imageName: "ip-address-tracker-thumbnail"
    },
    {
        title: 'Todo App',
        description: 'CRUD application allowed me to familiarize myself with various backend technologies, creating a webserver, rest endpoints and working with databases. This project was built using React Gatsby and Node.js.',
        websiteLink: 'https://infinite-crag-46049.herokuapp.com/',
        githubLink: 'https://github.com/andreviallon/react-node-todo-app',
        imageName: "todo-app-thumbnail"
    },
    {
        title: 'Weather App',
        description: 'Checkout the current weather and the forecast for the upcoming days. I built this app using React, React Router, context API and utilizing a third party weather API.',
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
