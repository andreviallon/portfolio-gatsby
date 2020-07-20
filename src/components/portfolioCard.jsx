import React from 'react';
import Img from 'gatsby-image';

import './portfolioCard.scss';

export default function PortfolioCard({project, image}) {
    return (
        <div className="card-container">
            <div className="img-container">
                <Img fluid={image} alt={project.title}/>
            </div>
            <div className="card-content">
                <p className="card-title">{project.title}</p>
                <p className="card-description">{project.description}</p>
                <div className="card-links-container">
                    <a className="hide-bottom-bar-on-hover" href={project.websiteLink} target="_blank" rel="noreferrer">live demo</a>
                    <a className="hide-bottom-bar-on-hover" href={project.githubLink} target="_blank" rel="noreferrer">view on github</a>
                </div>
            </div>
        </div>
    )
}
