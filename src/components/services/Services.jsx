import React from 'react';
import './Services.css';
import { FaCalendarAlt, FaUniversity, FaCaretRight } from "react-icons/fa";
import Image1 from '../../assets/graduate.svg';
import Image2 from '../../assets/btech.svg';

const educationData = [
    {
        id: 1,
        image: Image1,
        title: "Master's in Computer Science",
        institution: "University of Central Missouri",
        date: "Jan 2023 - Dec 2024",
        tech: ["Advanced Algorithms", "Advanced Database Systems", "Statistical Foundation in Data Science & AI",  "Cloud Computing"]
    },
    {
        id: 2,
        image: Image2,
        title: "Bachelor's in Computer Science & Engineering",
        institution: "NIT Calicut",
        date: "Jul 2017 - May 2021",
        tech: ["Machine Learning", "OOPS", "Operating Systems", "Compiler Design & Construction", "Web Development"]
    }
];

const Services = () => {
    return (
        <section className="services container section" id="education">
            <h2 className="section__title">Education</h2>

            <div className="services__container grid">
                {educationData.map(({ id, image, title, institution, date, tech }) => (
                    <div className="services__card" key={id}>
                        <img src={image} alt='' className='services__img' width="80" />
                        <h3 className="services__title">{title}</h3>
                        
                        <div className="services__institution">
                            <FaUniversity style={{ marginRight: '0.5rem' }} />
                            {institution}
                        </div>

                        <div className="services__date">
                            <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                            {date}
                        </div>

                        {/* Title before tech stack */}
                        <div className="services__tech-stack-title">
                            Coursework Done:
                        </div>

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

export default Services;
