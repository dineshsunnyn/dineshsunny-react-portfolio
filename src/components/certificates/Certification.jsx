// src/components/Certificate.jsx
import React from 'react';
import '../services/Services.css';
import { FaCalendarAlt, FaUniversity, FaCaretRight } from "react-icons/fa";
import { RiAwardLine } from "react-icons/ri";


import AWSImage from '../../assets/aws.svg';
import WalmartImage from '../../assets/walmart.svg';
import HackerRankImage from '../../assets/hackerrank.svg';

const certificateData = [
  {
    id: 1,
    image: AWSImage,
    title: "AWS Certified Developer – Associate",
    institution: "Amazon Web Services",
    date: "June 2024",
    tech: ["Lambda", "API Gateway", "IAM", "DynamoDB", "S3"],
    link: "https://www.cert-link.com/aws-developer-cert"
  },
  {
    id: 2,
    image: WalmartImage,
    title: "Frontend Development Certification",
    institution: "freeCodeCamp",
    date: "March 2023",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://www.cert-link.com/fcc-frontend"
  },
  {
    id: 3,
    image: HackerRankImage,
    title: "Python for Everybody",
    institution: "University of Michigan (Coursera)",
    date: "Jan 2022",
    tech: ["Python Basics", "Web Scraping", "REST APIs"],
    link: "https://www.cert-link.com/python-coursera"
  }
];

const Certificate = () => {
  return (
    <section className="services container section" id="certifications">
      <h2 className="section__title">Certifications</h2>

      <div className="services__container grid">
        {certificateData.map(({ id, image, title, institution, date, tech, link }) => (
          <div className="services__card" key={id}>
            <img src={image} alt={title} className="services__img" width="80" />

            <h3 className="services__title">
              <a href={link} target="_blank" rel="noopener noreferrer" className="services__link">
                {title}
              </a>
            </h3>

            <div className="services__institution">
             <RiAwardLine size={48} />
              {institution}
            </div>

            <div className="services__date">
              <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
              {date}
            </div>

            <div className="services__tech-stack-title">Skills Covered:</div>

            <ul className="services__tech-list">
              {tech.map((item, index) => (
                <li key={index} className="services__tech-item">
                  <FaCaretRight style={{ marginRight: '0.5rem' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
