// import React from 'react';
// import './Blog.css';

// import Image1 from '../../assets/front-end.png';

// const Blog = () => {
//     return (
//         <section className="blog container section" id="blog">
//             <h2 className="section__title">My Tech</h2>

//             <div className="blog__container grid">
//                 <div className="blog__card">
//                     <div className="blog__thumb">
//                         <a href="#"><span className="blog__category">Example</span></a>
//                         <a href="#"><img src={Image1} alt="" className='blog__img' /></a>
//                     </div>
//                     <div className="blog__details">
//                         <h3 className="blog__title">Example Blog</h3>
//                         {/* <div className="blog__meta"> */}
//                             <ul className="about__list">
//                             <li>JavaScript (ES6+)</li>
//                             <li>TypeScript</li>
//                             <li>React</li>
//                             <li>Node.js</li>
//                             <li>Postgres SQL</li>
//                             <li>NestJS</li>
//                         </ul>
//                         {/* </div> */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Blog

// import React from 'react';
// import uniqid from 'uniqid';
// import Spacer from './Spacer.tsx';
// import './Blog.css';
// const Skills: React.FC = () => {
//   const skills: string[] = [
//     'TypeScript',
//     'Express JS',
//     'Node JS',
//     'UML',
//     'Git',
//     'CI/CD',
//     'Docker',
//     'Kubernetes',
//     'CircleCI',
//     'PostgreSQL',
//     'MySQL',
//     'MongoDB',
//     'Flutter',
//     'Dart',
//     'IONIC',
//     'BootStrap',
//     'JQuery',
//     'Bitbucket',
//     'Postman',
//     'Linux',
//     'Bash',
//   ];

//   if (!skills.length) return null;

//   return (
//     <section className="section skills" id="skills">
//       <Spacer height={2} />
//       <h2 className="section__title">Skills</h2>
//       <ul className="skills__list">
//         {skills.map((skill) => (
//           <li key={uniqid()} className="skills__list-item btn btn--plain">
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import './Blog.css';

const skillsData = {
  "Languages": ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB (NoSQL)"],
  "Data Visualization Tools": ["Tableau"],
  "Cloud and DevOps": ["AWS", "CI/CD", "Git", "GitHub", "Bitbucket"],
  "Frameworks": ["Spring Boot", "Django", "Flask", "Vue.js", "ReactJS", "Node.js", "Express.js"],
  "Methodologies/Concepts": ["SDLC", "Agile", "Scrum", "Waterfall", "Iterative", "REST APIs", "Microservices Architecture"]
};

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills__category">
            <div className="skills__header">
              <h3 className="skills__category-title">{category}</h3>
            </div>
            <div className="skills__list">
              {skills.map((skill, index) => (
                <React.Fragment key={skill}>
                  <span className="skills__chip">{skill}</span>
                  {index !== skills.length - 1 && <span className="skills__arrow">➜</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
