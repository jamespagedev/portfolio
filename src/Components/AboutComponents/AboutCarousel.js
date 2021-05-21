import React, { useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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

const AboutCarousel = props => {
  // variables
  const { containerWidth, slideWidth } = props;
  const slideTitles = {1: "Education", 2: "History", 3: "What I Do For Fun"}
  const [slideIndex, setSlideIndex] = useState(1);
  const [hasScrollUpDown, setHasScrollUpDown] = useState(false);
  const [hobbyTabIdSelected, setHobbyTabIdSelected] = useState(hobbyTabIds.movies);
  const [rowsPerFunSlide] = useState(2);
  const [moviesVerticlePosition, setMoviesVerticlePosition] = useState(0);
  const [moviesContentResolution] = useState({totalHeight: 0, totalWidth: 0, viewHeight: 0, viewWidth: 0});
  const [musicVerticlePosition, setMusicVerticlePosition] = useState(0);
  const [musicContentResolution] = useState({totalHeight: 0, totalWidth: 0, viewHeight: 0, viewWidth: 0});
  const [gamesVerticlePosition, setGamesVerticlePosition] = useState(0);
  const [gamesContentResolution] = useState({totalHeight: 0, totalWidth: 0, viewHeight: 0, viewWidth: 0});

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
    moviesContentResolution.totalHeight = document.getElementById('movies-content').clientHeight;
    musicContentResolution.totalHeight = document.getElementById('music-content').clientHeight;
    gamesContentResolution.totalHeight = document.getElementById('games-content').clientHeight;
    moviesContentResolution.totalWidth = document.getElementById('movies-content').clientWidth;
    musicContentResolution.totalWidth = document.getElementById('music-content').clientWidth;
    gamesContentResolution.totalWidth = document.getElementById('games-content').clientWidth;
    moviesContentResolution.viewHeight = document.getElementById('movies-content-list-default').clientHeight * 2;
    musicContentResolution.viewHeight = document.getElementById('music-content-list-default').clientHeight * 2;
    gamesContentResolution.viewHeight = document.getElementById('games-content-list-default').clientHeight * 2;
    moviesContentResolution.viewWidth = document.getElementById('movies-content-list-default').clientWidth * 4;
    musicContentResolution.viewWidth = document.getElementById('music-content-list-default').clientWidth * 4;
    gamesContentResolution.viewWidth = document.getElementById('games-content-list-default').clientWidth * 4;
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
      <div className="div-about-carousel-window">
        <div className="div-about-carousel-inner" style={{width: `${maxSlides * containerWidth}px`, right: `${containerWidth * slideIndex - containerWidth}px`}}>
          <div className="div-about-carousel-slide" style={{width: `${slideWidth}px`}}>
            <EducationSlide />
          </div>
          <div className="div-about-carousel-slide" style={{width: `${slideWidth}px`}}>
            <HistorySlide />
          </div>
          <div className="div-about-carousel-slide" style={{width: `${slideWidth}px`}}>
            <FunSlide
              hobbyTabIdSelected={hobbyTabIdSelected}
              handleChangeTab={handleChangeTab}
              moviesVerticlePosition={moviesVerticlePosition}
              musicVerticlePosition={musicVerticlePosition}
              gamesVerticlePosition={gamesVerticlePosition}
            />
          </div>
        </div>
        {hasScrollUpDown && 
          <div className="div-about-fun-buttons">
            { ((hobbyTabIdSelected === hobbyTabIds.movies && moviesVerticlePosition === 0) || (hobbyTabIdSelected === hobbyTabIds.music && musicVerticlePosition === 0) || (hobbyTabIdSelected === hobbyTabIds.videoGames && gamesVerticlePosition === 0)) ?
              <button className="down-to-bottom" onClick={scrollUp}><span>&#8964;</span><span>&#8964;</span></button> :
              <button className="up" onClick={scrollUp}><span>&#8964;</span></button>
            }
            { 
              (
                ( 
                  hobbyTabIdSelected === hobbyTabIds.movies &&
                  moviesVerticlePosition !== 0 &&
                  moviesVerticlePosition + moviesContentResolution.viewHeight >= moviesContentResolution.totalHeight
                ) || 
                (
                  hobbyTabIdSelected === hobbyTabIds.music &&
                  musicVerticlePosition !== 0 &&
                  musicVerticlePosition + musicContentResolution.viewHeight >= musicContentResolution.totalHeight
                ) || 
                (
                  hobbyTabIdSelected === hobbyTabIds.videoGames && 
                  gamesVerticlePosition !== 0 && 
                  gamesVerticlePosition + gamesContentResolution.viewHeight >= gamesContentResolution.totalHeight
                )
              ) ?
              <button className="up-to-top" onClick={scrollDown}><span>&#8964;</span><span>&#8964;</span></button> :
              <button className="down" onClick={scrollDown}><span>&#8964;</span></button>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default AboutCarousel;