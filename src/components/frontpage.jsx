import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { TimelineLite, TweenMax, Power3 } from 'gsap';
import './frontpage.scss';


export default function Frontpage({ onClick }) {
    let frontPage = useRef(null);
    let title = useRef(null);
    let subTitle = useRef(null);
    let seePortfolioRef = useRef(null);
    let tl = new TimelineLite();

    useEffect(() => {
        TweenMax.to(frontPage, 0, { css: { visibility: 'visible' } });

        const headlineFirst = title.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const subHeadline = subTitle;
        const seePortfolioBtn = seePortfolioRef;

        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], .6, {
            y: 55,
            ease: Power3.easeOut
        }, .15)
        .from(subHeadline, 1, {
            y: 20,
            opacity: 0,
            ease: Power3.easeOut
        }, .8)
        .from(seePortfolioBtn, 1, {
            y: 20,
            opacity: 0,
            ease: Power3.easeOut
        }, 1);
    });

    return (
        <div className="frontpage-container" ref={el => frontPage = el}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="hero-content-inner" ref={el => title = el}>
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Hi there, my name is André.</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">I’m a frontend engineer,</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">and ui designer.</div>
                                </div>
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={12} md={10} lg={7}>
                        <div className="sub-title" ref={el => subTitle = el}>
                            <span>Welcome to my portfolio. Here you can have a look at my personal projects and learn more about me. You can also see more of my coding projects on <a className="hide-bottom-bar-on-hover bold" href="https://github.com/andreviallon" target="_blank" rel="noreferrer">github</a>, see more of my designs on <a className="hide-bottom-bar-on-hover bold" href="https://dribbble.com/andreviallon" target="_blank" rel="noreferrer">dribbble</a>, connect with my on <a className="hide-bottom-bar-on-hover bold" href="https://www.linkedin.com/in/andre-viallon" target="_blank" rel="noreferrer">linkedin</a> or simply write me an <a className="hide-bottom-bar-on-hover bold" href="mailto:viallon.andre@gmail.com" rel="noopener noreferrer">email</a>.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="see-portfolio-container" ref={el => seePortfolioRef = el}>
                <a onClick={onClick} className="hide-bottom-bar-on-hover">see portfolio</a>
            </div>
        </div>
    )
}
