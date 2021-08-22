import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths } from '../../globals/CssMixins.js';

// components
import Project from './Project.js';

// variables
const Data = [
  {
    projectName: ["Symposium", "Discussion", "Boards"],
    projectPreviewImg: "SymposiumDiscussion",
    imgType: "gif",
    pNamefontSize: "2.2rem",
    pNameFontFamily: "Sans Serif",
    summary: ["Using react/redux, stripe, styled-components, nodejs/express, knex, and many other tech stacks... this is a website where you can go to get caught up on your most important discussions. Using this new web app users will be able to participate in forum conversations where people can share news, content, or comment on other people’s posts."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["React", "Styled-Components", "Stripe", "Redux", "Auth0", "Prop-Types", "Axios", "NodeJS", "Express", "BcryptJS", "JsonWebToken", "Knex", "pg", "Cors", "Dotenv", "Helmet", "Morgan", "Jimp", "Faker", "Concurrently", "Moment", "Jest", "Nodemon"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/Lambda-School-Labs/labs10-discussion-board"],
      website: ["https://symposium-frontend.netlify.com/"]
    }
  },
  {
    projectName: ["S&J", "Architecture"],
    projectPreviewImg: "SnJArcHomeDesktop",
    imgType: "png",
    pNamefontSize: "2.2rem",
    pNameFontFamily: "Sans Serif",
    summary: ["Using html, css, and javascript... this is a multi-page startup website complete with a marketing landing page, a services page, and a contact form. The project matches the design documents provided by the customer to be pixel perfect"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["HTML", "CSS", "LESS", "Javascript", "Responsive Design"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/User-Interface-Project-Week"],
      website: ["https://htmlpreview.github.io/?https://github.com/jamespagedev/User-Interface-Project-Week/blob/master/index.html"]
    }
  },
  {
    projectName: ["FF7", "Leveling", "Calculator"],
    projectPreviewImg: "FF7LevelingCalculator",
    imgType: "png",
    pNamefontSize: "2.2rem",
    pNameFontFamily: "Sans Serif",
    summary: ["Using java, swing, and vector calculus... this level up calculator is for the game Final Fantasy 7. The calculator will show you the next possible random stats you will gain upon your next level up. It also offers a range of levelup stat paths to get the best stat combination available per character."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["Java", "Swing", "JUnit"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/FF7-LevelUpStatCalculator"],
      website: ["None"]
    }
  },
  {
    projectName: ["Graphs"],
    projectPreviewImg: "Graphs",
    imgType: "png",
    pNamefontSize: "2.2rem",
    pNameFontFamily: "Sans Serif",
    summary: ["Using python, graphs, bfs, queue, and stack... this project offers several graphs (up to 500 rooms) linked together in a compass direction. The program utilizes a queue, a stack, and a breadth-first-search to traverse through the graph of all rooms in the least amount of steps possible."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["Python", "Graphs", "BFS", "Queue", "Stack"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/Sprint-Challenge--Graphs"],
      website: ["None"]
    }
  },
]

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  margin-bottom: 5rem;

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
  }
`;

//=========================================== component ===========================================
const Projects = () => {
  return (
    <DivWrapper>
      {Data.map((project, projectNumber) => {
        return <Project project={project} projectName={project.projectName.join(' ')} key={projectNumber} />
      })}
    </DivWrapper>
  );
};

export default Projects;