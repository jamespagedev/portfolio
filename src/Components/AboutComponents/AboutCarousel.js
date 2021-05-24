import React, { useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// components
import EducationSlide from './EducationSlide.js';
import HistorySlide from './HistorySlide.js';
import FunSlide from './FunSlide.js';

// Globals
import { hobbyTabIds } from '../../Globals/index.js';

// Carousel Config
const maxSlides = 3;
const funSlideIndex = 3;
const slidesIndexesWithScroll = new Set([funSlideIndex]);

const AboutCarousel = () => {
  // variables
  const slideTitles = {1: "Education", 2: "History", 3: "What I Do For Fun"};
  const slideIndexes = {education: 1, history: 2, fun: 3};
  const [slideIndex, setSlideIndex] = useState(slideIndexes.education);
  const [hasScrollUpDown, setHasScrollUpDown] = useState(false);
  const [hobbyTabIdSelected, setHobbyTabIdSelected] = useState(hobbyTabIds.movies);
  const [rowsPerFunSlide] = useState(2);
  const [moviesVerticlePosition, setMoviesVerticlePosition] = useState(0);
  const [moviesContentResolution, setMoviesContentResolution] = useState({totalHeight: 0, totalWidth: 0, viewHeight: 0, viewWidth: 0});
  const [musicVerticlePosition, setMusicVerticlePosition] = useState(0);
  const [musicContentResolution, setMusicContentResolution] = useState({totalHeight: 0, totalWidth: 0, viewHeight: 0, viewWidth: 0});
  const [gamesVerticlePosition, setGamesVerticlePosition] = useState(0);
  const [gamesContentResolution, setGamesContentResolution] = useState({totalHeight: 0, totalWidth: 0, viewHeight: 0, viewWidth: 0});

  // functions
  const next = () => {
    const nextSlideIndex = (slideIndex + 1) > maxSlides ? 1 : slideIndex + 1
    setSlideIndex(nextSlideIndex);
    slidesIndexesWithScroll.has(nextSlideIndex) ? setHasScrollUpDown(true) : setHasScrollUpDown(false);
  }

  const prev = () => {
    const prevSlideIndex = (slideIndex - 1) < 1 ? maxSlides : slideIndex - 1
    setSlideIndex(prevSlideIndex);
    slidesIndexesWithScroll.has(prevSlideIndex) ? setHasScrollUpDown(true) : setHasScrollUpDown(false);
  }

  const changeSlide = (slideNum) => {
    setSlideIndex(slideNum);
    slidesIndexesWithScroll.has(slideNum) ? setHasScrollUpDown(true) : setHasScrollUpDown(false);
  }

  // Functions
  const scrollDown = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      const newVertical = moviesVerticlePosition + moviesContentResolution.viewHeight;
      (newVertical >= moviesContentResolution.totalHeight) ? setMoviesVerticlePosition(0) : setMoviesVerticlePosition(newVertical);
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      const newVertical = musicVerticlePosition + musicContentResolution.viewHeight;
      (newVertical >= musicContentResolution.totalHeight) ? setMusicVerticlePosition(0) : setMusicVerticlePosition(newVertical);
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      const newVertical = gamesVerticlePosition + gamesContentResolution.viewHeight;
      (newVertical >= gamesContentResolution.totalHeight) ? setGamesVerticlePosition(0) : setGamesVerticlePosition(newVertical);
    }
  }

  const scrollUp = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      const newVertical = moviesVerticlePosition - moviesContentResolution.viewHeight;
      if (moviesContentResolution.totalHeight % moviesContentResolution.viewHeight === moviesContentResolution.viewHeight / rowsPerFunSlide){
        (newVertical < 0) ? setMoviesVerticlePosition(moviesContentResolution.totalHeight - (moviesContentResolution.viewHeight / rowsPerFunSlide)) : setMoviesVerticlePosition(newVertical);
      } else {
        (newVertical < 0) ? setMoviesVerticlePosition(moviesContentResolution.totalHeight - moviesContentResolution.viewHeight) : setMoviesVerticlePosition(newVertical);
      }
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      const newVertical = musicVerticlePosition - musicContentResolution.viewHeight;
      if (musicContentResolution.totalHeight % musicContentResolution.viewHeight === musicContentResolution.viewHeight / rowsPerFunSlide){
        (newVertical < 0) ? setMusicVerticlePosition(musicContentResolution.totalHeight - (musicContentResolution.viewHeight / rowsPerFunSlide)) : setMusicVerticlePosition(newVertical);
      } else {
        (newVertical < 0) ? setMusicVerticlePosition(musicContentResolution.totalHeight - musicContentResolution.viewHeight) : setMusicVerticlePosition(newVertical);
      }
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      const newVertical = gamesVerticlePosition - gamesContentResolution.viewHeight;
      if (gamesContentResolution.totalHeight % gamesContentResolution.viewHeight === gamesContentResolution.viewHeight / rowsPerFunSlide){
        (newVertical < 0) ? setGamesVerticlePosition(gamesContentResolution.totalHeight - (gamesContentResolution.viewHeight / rowsPerFunSlide)) : setGamesVerticlePosition(newVertical);
      } else {
        (newVertical < 0) ? setGamesVerticlePosition(gamesContentResolution.totalHeight - gamesContentResolution.viewHeight) : setGamesVerticlePosition(newVertical);
      }
    }
  }

  const handleChangeTab = (tabSelected) => {
    setHobbyTabIdSelected(tabSelected)
  }

  useLayoutEffect(() => {
    if (hobbyTabIdSelected === hobbyTabIds.movies && moviesContentResolution.totalHeight === 0) {
      const newContentResolution = {}
      newContentResolution.totalHeight = document.getElementById('movies-content').clientHeight;
      newContentResolution.totalWidth = document.getElementById('movies-content').clientWidth;
      newContentResolution.viewHeight = document.getElementById('movies-content-list-default').clientHeight * 2;
      newContentResolution.viewWidth = document.getElementById('movies-content-list-default').clientWidth * 4;
      setMoviesContentResolution(newContentResolution);
    }
    if (hobbyTabIdSelected === hobbyTabIds.music && musicContentResolution.totalHeight === 0) {
      const newContentResolution = {}
      newContentResolution.totalHeight = document.getElementById('music-content').clientHeight;
      newContentResolution.totalWidth = document.getElementById('music-content').clientWidth;
      newContentResolution.viewHeight = document.getElementById('music-content-list-default').clientHeight * 2;
      newContentResolution.viewWidth = document.getElementById('music-content-list-default').clientWidth * 4;
      setMusicContentResolution(newContentResolution);
    }
    if (hobbyTabIdSelected === hobbyTabIds.videoGames && gamesContentResolution.totalHeight === 0) {
      const newContentResolution = {}
      newContentResolution.totalHeight = document.getElementById('games-content').clientHeight;
      newContentResolution.totalWidth = document.getElementById('games-content').clientWidth;
      newContentResolution.viewHeight = document.getElementById('games-content-list-default').clientHeight * 2;
      newContentResolution.viewWidth = document.getElementById('games-content-list-default').clientWidth * 4;
      setGamesContentResolution(newContentResolution);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hobbyTabIdSelected]);

  // render
  return (
    <div className="div-about-carousel">
      <div className="div-about-carousel-buttons-title">
        <button onClick={prev}>{slideIndex === 1 ? <span style={{paddingLeft: "2px"}}><FontAwesomeIcon icon={faChevronRight}/><FontAwesomeIcon icon={faChevronRight}/></span> :  <span style={{paddingRight: "4px"}}><FontAwesomeIcon icon={faChevronLeft} /></span>}</button>
        <h1>{slideTitles[slideIndex]}</h1>
        <button onClick={next}>{slideIndex === maxSlides ? <span style={{paddingRight: "2px"}}><FontAwesomeIcon icon={faChevronLeft}/><FontAwesomeIcon icon={faChevronLeft}/></span> : <span style={{paddingLeft: "4px"}}><FontAwesomeIcon icon={faChevronRight} /></span>}</button>
      </div>
      <div className="div-about-carousel-dots">
        {[...Array(maxSlides)].map((num, i) => <div key={i} className="dot-action" onClick={() => changeSlide(i+1)}><div className={slideIndex === i+1 ? "dot selected" : "dot"} /></div>)}
      </div>
      <div className="div-about-carousel-window">
        <div className={
          slideIndex === slideIndexes.education ? "div-about-carousel-inner div-about-carousel-inner-on-slide-one" :
          (slideIndex === slideIndexes.history ? "div-about-carousel-inner div-about-carousel-inner-on-slide-two" :
          (slideIndex === slideIndexes.fun ? "div-about-carousel-inner div-about-carousel-inner-on-slide-three" :
          "div-about-carousel-inner"
        ))}>
          <div className={slideIndex === slideIndexes.education ? "div-about-carousel-slide-container" : "div-about-carousel-slide-container about-carousel-slide-container-hide"}>
            <EducationSlide />
          </div>
          <div className={slideIndex === slideIndexes.history ? "div-about-carousel-slide-container" : "div-about-carousel-slide-container about-carousel-slide-container-hide"}>
            <HistorySlide />
          </div>
          <div className={slideIndex === slideIndexes.fun ? "div-about-carousel-slide-container" : "div-about-carousel-slide-container about-carousel-slide-container-hide"}>
            <FunSlide
              hobbyTabIdSelected={hobbyTabIdSelected}
              handleChangeTab={handleChangeTab}
              moviesVerticlePosition={moviesVerticlePosition}
              musicVerticlePosition={musicVerticlePosition}
              gamesVerticlePosition={gamesVerticlePosition}
            />
          </div>
        </div>
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.movies &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={scrollUp}>
              {(moviesVerticlePosition === 0) ?
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={scrollDown}>
                {(moviesVerticlePosition + moviesContentResolution.viewHeight >= moviesContentResolution.totalHeight) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.music && musicContentResolution.totalHeight !== 0 &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={scrollUp}>
              {(musicVerticlePosition === 0) ?
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={scrollDown}>
                {(musicVerticlePosition + musicContentResolution.viewHeight >= musicContentResolution.totalHeight) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.videoGames &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={scrollUp}>
              {(gamesVerticlePosition === 0) ?
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={scrollDown}>
                {(gamesVerticlePosition + gamesContentResolution.viewHeight >= gamesContentResolution.totalHeight) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
      </div>
    </div>
  )
}

export default AboutCarousel;