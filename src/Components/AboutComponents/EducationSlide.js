import React, { useState } from 'react';
import Associates from '../../img/associate-degree.png';
import Bachelors from '../../img/bachelor-degree.png';
import LambdaFswBadge from '../../img/lambda-fsw-badge.png';
import FavBooks from '../../img/favorite-books.jpg';

const EducationSlide = () => {
  const mobileDropdownSelections = {associates: 1, bachelors: 2, eduBadge: 3, books: 4}
  const [mobileDropdownSelection, setMobileDropdownSelection] = useState(mobileDropdownSelections.associates);

  return (
    <div className="div-about-carousel-education-slide">
      <select className="about-carousel-education-mobile-selection" onChange={ev => setMobileDropdownSelection(Number(ev.target.value))} value={mobileDropdownSelection}>
        <option value={mobileDropdownSelections.associates}>Associates</option>
        <option value={mobileDropdownSelections.bachelors}>Bachelors</option>
        <option value={mobileDropdownSelections.eduBadge}>Full Stack &amp; CS Bootcamp</option>
        <option value={mobileDropdownSelections.books}>Favorite&nbsp;Books</option>
      </select>
      <div className="div-about-carousel-education-row">
        <a href={Associates} target="_blank" rel="noopener noreferrer" className={mobileDropdownSelection === mobileDropdownSelections.associates ? "about-carousel-education-top-left selected" : "about-carousel-education-top-left"}>
            <h2>Associates</h2>
            <img src={Associates} alt="associates" className="img-about-carousel-education-associates" />
        </a>
        <a href={Bachelors} target="_blank" rel="noopener noreferrer" className={mobileDropdownSelection === mobileDropdownSelections.bachelors ? "about-carousel-education-top-right selected" : "about-carousel-education-top-right"}>
            <h2>Bachelors</h2>
            <img src={Bachelors} alt="bachelors" className="img-about-carousel-education-bachelors" />
        </a>
      </div>
      <div className="div-about-carousel-education-row">
        <a href="https://www.youracclaim.com/badges/6cd50211-c042-438a-bb63-4912d24607cc?source=linked_in_profile" target="_blank" rel="noopener noreferrer" className={mobileDropdownSelection === mobileDropdownSelections.eduBadge ? "about-carousel-education-bottom-left selected" : "about-carousel-education-bottom-left"}>
            <h2>Full Stack &amp; CS Bootcamp</h2>
            <img src={LambdaFswBadge} alt="lambda fsw badge" className="img-about-carousel-education-badge" />
        </a>
        <a href={FavBooks} target="_blank" rel="noopener noreferrer" className={mobileDropdownSelection === mobileDropdownSelections.books ? "about-carousel-education-bottom-right selected" : "about-carousel-education-bottom-right"}>
            <h2>Favorite&nbsp;Books</h2>
            <img src={FavBooks} alt="books" className="img-about-carousel-education-books" />
        </a>
      </div>
    </div>
  )
}

export default EducationSlide;