import React, { useRef, useEffect } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { TimelineLite, TweenMax, Power3 } from 'gsap';
import './aboutMe.scss';

export default function AboutMe() {
    const data = useStaticQuery(graphql`
        query data {
            image: file(relativePath: {eq: "avatar/avatar.png"}, name: {}) {
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
            },
            resume: file(name: { eq: "resume" }) {
                name
                extension
                publicURL
            }
        }
    `);

    let aboutPage = useRef(null);
    let headline = useRef(null);
    let content = useRef(null);
    let avatar = useRef(null);
    let resume = useRef(null);

    const tl = new TimelineLite();

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
                                <p>So, this is where I get to talk a bit about myself. My name is André. I’m a Frontend Developer with a great passion for creating beautiful, modern and intuitive User Interfaces.</p>
                                <p>I’ve always wanted to push myself and learn more. That’s why I left France, my home country, to move to Denmark back in 2012 where I joined the International Baccalaureate in Sønderborg. I then went on with studying Web Development as well as UI design at the International Business Academy in Kolding.</p>
                                <p>In my spare time, I enjoy playing the guitar (since the age of 12). The main thing playing a musical instrument taught me is that nothing comes easily. The only way to success is through dedication, discipline and hard work.</p>
                                <p>I encourage you to checkout my resume to learn more about my past experiences and my skills.</p>
                            </div>
                            <div className="open-resume-container" ref={el => resume = el}>
                                <a href={data.resume.publicURL} target="_blank" rel="noreferrer" className="open-resume hide-bottom-bar-on-hover">open resume</a>
                            </div>
                        </Col>

                        <Col md={8} lg={4} offset={{ md: 2, lg: 0 }}>
                            <div className="avatar-container" ref={el => avatar = el}>
                                <Img fluid={data.image.childImageSharp.fluid} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
