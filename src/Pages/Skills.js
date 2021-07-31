import React from 'react';

function Skills() {
  return(
    <div id="skills" className="div-skills">
      <div className="div-skills-side-cover" />
      <div className="div-skills-content-container">
        {/* Languages */}
        <div className="bubble bubble-sm bubble-c">
          <img src="images/c.svg" alt="C" />
        </div>
        <div className="bubble bubble-xlg bubble-python">
          <img src="images/python.svg" alt="Python" />
        </div>
        <div className="bubble bubble-md-lg bubble-js">
          <img src="images/javascript.svg" alt="Javascript" />
        </div>
        <div className="bubble bubble-lg bubble-java">
          <img src="images/java.svg" alt="Java" />
        </div>
        <div className="bubble bubble-sm-md bubble-cpp">
          <img src="images/cpp.svg" alt="C++" />
        </div>
        <div className="bubble bubble-md bubble-ps">
          <img src="images/powershell.svg" alt="Powershell" />
        </div>
        {/* Front-end */}
        <div className="bubble bubble-xlg bubble-css">
          <img src="images/css.svg" alt="CSS" />
        </div>
        <div className="bubble bubble-md bubble-redux">
          <img src="images/redux.svg" alt="Redux" />
        </div>
        <div className="bubble bubble-sm-md bubble-axios">
          <img src="images/axios.svg" alt="Axios" />
        </div>
        <div className="bubble bubble-md-lg bubble-react">
          <img src="images/react.svg" alt="React" />
        </div>
        <div className="bubble bubble-lg bubble-html5">
          <img src="images/html5.svg" alt="HTML5" />
        </div>
        <div className="bubble bubble-sm bubble-less">
          <img src="images/less.svg" alt="Less" />
        </div>
        {/* Back-end */}
        <div className="bubble bubble-md bubble-knex">
          <img src="images/knex.svg" alt="Knex" />
        </div>
        <div className="bubble bubble-sm-md bubble-stripe">
          <img src="images/StripeWhite.svg" alt="Stripe" />
        </div>
        <div className="bubble bubble-xlg bubble-rest">
          <img src="images/restfulapi.svg" alt="Rest" />
        </div>
        <div className="bubble bubble-sm bubble-nodejs">
          <img src="images/nodejs.svg" alt="Nodejs" />
        </div>
        <div className="bubble bubble-md-lg bubble-express">
          <img src="images/express.svg" alt="Express" />
        </div>
        <div className="bubble bubble-lg bubble-postgresql">
          <img src="images/postgresql.svg" alt="PostgreSQL" />
        </div>
      </div>
      <div className="div-skills-side-cover" />
    </div>
  );
}

export default Skills;