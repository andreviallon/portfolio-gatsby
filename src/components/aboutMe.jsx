import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
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

    return (
        <div className="about-container">
            <Container>
                <h2 className="section-title">about</h2>

                <Row gutterWidth={100}>
                    <Col md={12} lg={8}>
                        <div className="about-description">
                            <p>So, this is where I get to talk a bit about myself. My name is André. I’m a Frontend Developer with a great passion for creating beautiful, modern and intuitive User Iterfaces.</p>
                            <p>I’ve always watned to push myself and learn more. That’s why I left France, my home country, to move to Denmark back in 2012 where I joined the International Baccalaureate in Sønderborg. I then went on with studying Web Development as well as UI desing at the International Business Academy in Kolding.</p>
                            <p>In my spare time I play the guitar (since the age of 12). The main thing playing a musical instrument taught me is that nothing simply comes easily, the only way to success is through dedication, dicipline and hard work.
                                I encourage you to checkout my resume to learn more about my past experience and my skills.</p>
                            <a href="/about" className="open-resume hide-bottom-bar-on-hover">open resume</a>
                        </div>
                    </Col>

                    <Col md={12} lg={4}>
                        <div className="avatar-container">
                            <Img fluid={data.file.childImageSharp.fluid} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
