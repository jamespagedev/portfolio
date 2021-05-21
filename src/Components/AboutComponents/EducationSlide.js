import React from 'react';
import Associates from '../../img/associate-degree.png';
import Bachelors from '../../img/bachelor-degree.png';
import LambdaFswBadge from '../../img/lambda-fsw-badge.png';
import FavBooks from '../../img/favorite-books.jpg';

const EducationSlide = () => {
  return (
    <div className="div-about-carousel-education-slide">
      <div className="div-about-carousel-education-row">
        <div style={{borderRight: "1px solid #00ffff", borderBottom: "1px solid #00ffff"}}>
          <h2>Associates</h2>
          <img src={Associates} alt="associates" className="img-about-carousel-education-associates" />
        </div>
        <div style={{borderLeft: "1px solid #00ffff", borderBottom: "1px solid #00ffff"}}>
          <h2>Bachelors</h2>
          <img src={Bachelors} alt="bachelors" className="img-about-carousel-education-bachelors" />
        </div>
      </div>
      <div className="div-about-carousel-education-row">
        <div style={{borderRight: "1px solid #00ffff", borderTop: "1px solid #00ffff"}}>
          <h2>Full Stack &amp; CS Bootcamp</h2>
          <img src={LambdaFswBadge} alt="lambda fsw badge" className="img-about-carousel-education-badge" />
        </div>
        <div style={{borderLeft: "1px solid #00ffff", borderTop: "1px solid #00ffff"}}>
          <h2>Favorite&nbsp;Books</h2>
          <img src={FavBooks} alt="lambda fsw badge" className="img-about-carousel-education-books" />
        </div>
      </div>
    </div>
  )
}

export default EducationSlide;