import React, { useRef, useEffect } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { TimelineLite, TweenMax, Power3 } from 'gsap';
import './aboutMe.scss';

export default function AboutMe() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: {eq: "avatar/avatar.png"}, name: {}) {
                id
                childImageSharp {
                    sizes {
                        src
                        srcSet
                    }
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }

    `);

    let aboutPage = useRef(null);
    let headline = useRef(null);
    let content = useRef(null);
    let avatar = useRef(null);
    let resume = useRef(null);

    let tl = new TimelineLite();

    useEffect(() => {
        TweenMax.to(aboutPage, 0, { css: { visibility: 'visible' } });

        const aboutHeadline = headline.children[0];
        const aboutContent = content;
        const aboutResume = resume;
        const aboutAvatar = avatar.children[0];

        tl
            .from(aboutHeadline, .6, { y: 55, ease: Power3.easeOut })
            .staggerFrom([aboutContent, aboutResume, aboutAvatar], .9, {
                y: 20,
                opacity: 0,
                ease: Power3.easeOut
            }, .3);
    });

    return (
        <div className="about-container" ref={el => aboutPage = el}>
            <Container>
                <div className="hero-content-line" ref={el => headline = el}>
                    <h2 className="section-title">about</h2>
                </div>

                <div className="section-container">
                    <Row gutterWidth={100}>
                        <Col md={12} lg={8}>
                            <div className="about-description" ref={el => content = el}>
                                <p>So, this is where I get to talk a bit about myself. My name is André. I’m a Frontend Developer with a great passion for creating beautiful, modern and intuitive User Iterfaces.</p>
                                <p>I’ve always watned to push myself and learn more. That’s why I left France, my home country, to move to Denmark back in 2012 where I joined the International Baccalaureate in Sønderborg. I then went on with studying Web Development as well as UI desing at the International Business Academy in Kolding.</p>
                                <p>In my spare time I play the guitar (since the age of 12). The main thing playing a musical instrument taught me is that nothing comes easily. The only way to success is through dedication, dicipline and hard work.</p>
                                <p>I encourage you to checkout my resume to learn more about my past experience and my skills.</p>
                            </div>
                            <div className="open-resume-container" ref={el => resume = el}>
                                <a href="/about" className="open-resume hide-bottom-bar-on-hover">open resume</a>
                            </div>
                        </Col>

                        <Col md={12} lg={4}>
                            <div className="avatar-container" ref={el => avatar = el}>
                                <Img fluid={data.file.childImageSharp.fluid} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
