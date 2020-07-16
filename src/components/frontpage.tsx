import React from 'react';
import './frontpage.scss';
import { Container, Row, Col } from 'react-grid-system';

export default function frontpage() {
    return (
        <div className="frontpage-container">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="title">
                            <span>Hi there, my name is André.</span>
                            <span>I’m a frontend engineer,</span>
                            <span>and ui designer.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={7}>
                        <div className="sub-title">
                            <span>Welcome to my portfolio. Here you can have a look at my personal projects and learn more about me. You can see more of my coding projects on <a className="hide-bottom-bar-on-hover bold" href="https://dribbble.com/andreviallon" target="_blank">github</a>, see more of my designs on <a className="hide-bottom-bar-on-hover bold" href="https://dribbble.com/andreviallon" target="_blank">dribbble</a>, connect with my on <a className="hide-bottom-bar-on-hover bold" href="https://dribbble.com/andreviallon" target="_blank">linkedin</a> or simply write me an <a className="hide-bottom-bar-on-hover bold" href="https://dribbble.com/andreviallon" target="_blank">email</a>.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="see-portfolio-container">
                <a className="hide-bottom-bar-on-hover">see portfolio</a>
            </div>
        </div>
    )
}
