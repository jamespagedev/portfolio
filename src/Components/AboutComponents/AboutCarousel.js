import React, { useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';
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
  const [slideIndexes] = useState({education: 1, history: 2, fun: 3});
  const [slideIndex, setSlideIndex] = useState(slideIndexes.education);
  const [hasScrollUpDown, setHasScrollUpDown] = useState(false);
  const [hobbyTabIdSelected, setHobbyTabIdSelected] = useState(hobbyTabIds.movies);
  const [moviesContentVertPos, setMoviesContentVertPos] = useState(0);
  const [musicContentVertPos, setMusicContentVertPos] = useState(0);
  const [gamesContentVertPos, setGamesContentVertPos] = useState(0);
  const [isMoviesScreenResized, setIsMoviesScreenResized] = useState(true); // note: the set*(!var) tells the jsx to re-render, we don't care if it's true or false
  const [isMusicScreenResized, setIsMusicScreenResized] = useState(true); // note: the set*(!var) tells the jsx to re-render, we don't care if it's true or false
  const [isGamesScreenResized, setIsGamesScreenResized] = useState(true); // note: the set*(!var) tells the jsx to re-render, we don't care if it's true or false

  // carousel functions
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

  // fun slide functions
  const handleChangeTab = (tabSelected) => {
    setHobbyTabIdSelected(tabSelected)
  }

  const getFunSlideTotalHeight = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      return document.getElementById('movies-content').clientHeight;
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      return document.getElementById('music-content').clientHeight;
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      return document.getElementById('games-content').clientHeight;
    }
    return 0;
  }

  const getFunSlideListBlockHeight = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      return document.getElementById('movies-content-list-default').clientHeight;
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      return document.getElementById('music-content-list-default').clientHeight;
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      return document.getElementById('games-content-list-default').clientHeight;
    }
    return 0;
  }

  const getFunSlideRowNum = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      return Math.floor(document.getElementById('id-div-about-carousel-window').clientHeight / getFunSlideListBlockHeight());
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      return Math.floor(document.getElementById('id-div-about-carousel-window').clientHeight / getFunSlideListBlockHeight());
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      return Math.floor(document.getElementById('id-div-about-carousel-window').clientHeight / getFunSlideListBlockHeight());
    }
    return 0;
  }

  const getFunSlideScrollHeight = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      return getFunSlideListBlockHeight() * getFunSlideRowNum();
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      return getFunSlideListBlockHeight() * getFunSlideRowNum();
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      return getFunSlideListBlockHeight() * getFunSlideRowNum();
    }
    return 0;
  }

  const sideTopBtnOnClick = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      const moviesPositionHeightRefreshed = moviesContentVertPos - getFunSlideScrollHeight();
      (moviesPositionHeightRefreshed < 0) ?
        setMoviesContentVertPos(getFunSlideTotalHeight() - getFunSlideScrollHeight()) : 
        setMoviesContentVertPos(moviesPositionHeightRefreshed);
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      const musicPositionHeightRefreshed = musicContentVertPos - getFunSlideScrollHeight();
      (musicPositionHeightRefreshed < 0) ?
        setMusicContentVertPos(getFunSlideTotalHeight() - getFunSlideScrollHeight()) : 
        setMusicContentVertPos(musicPositionHeightRefreshed);
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      const gamesPositionHeightRefreshed = gamesContentVertPos - getFunSlideScrollHeight();
      (gamesPositionHeightRefreshed < 0) ?
        setGamesContentVertPos(getFunSlideTotalHeight() - getFunSlideScrollHeight()) : 
        setGamesContentVertPos(gamesPositionHeightRefreshed);
    }
  }

  const sideBotBtnOnClick = () => {
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      const moviesPositionHeightRefreshed = moviesContentVertPos + getFunSlideScrollHeight();
      (moviesPositionHeightRefreshed >= getFunSlideTotalHeight()) ?
        setMoviesContentVertPos(0) : 
        setMoviesContentVertPos(moviesPositionHeightRefreshed);
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      const musicPositionHeightRefreshed = musicContentVertPos + getFunSlideScrollHeight();
      (musicPositionHeightRefreshed >= getFunSlideTotalHeight()) ?
        setMusicContentVertPos(0) : 
        setMusicContentVertPos(musicPositionHeightRefreshed);
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      const gamesPositionHeightRefreshed = gamesContentVertPos + getFunSlideScrollHeight();
      (gamesPositionHeightRefreshed >= getFunSlideTotalHeight()) ?
        setGamesContentVertPos(0) : 
        setGamesContentVertPos(gamesPositionHeightRefreshed);
    }
  }

  // setup
  useLayoutEffect(() => {
    if (slideIndex === slideIndexes.fun) {
      const handleResize = debounce(() => {
        console.log('hobbyTabIdSelected', hobbyTabIdSelected);
        console.log('hobbyTabIds.movies', hobbyTabIds.movies);
        if (hobbyTabIdSelected === hobbyTabIds.movies) {
          console.log('useLayoutEffect', isMoviesScreenResized);
          setIsMoviesScreenResized(!isMoviesScreenResized);
        }
        if (hobbyTabIdSelected === hobbyTabIds.music) {
          setIsMusicScreenResized(!isMusicScreenResized);
        }
        if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
          setIsGamesScreenResized(!isGamesScreenResized);
        }
        console.log('---------------------')
      }, 100);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  },[
      slideIndex, slideIndexes, hobbyTabIdSelected, 
      isMoviesScreenResized, isMusicScreenResized, isGamesScreenResized, 
      setIsMoviesScreenResized, setIsMusicScreenResized, setIsGamesScreenResized
    ]
  );

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
      <div className="div-about-carousel-window" id="id-div-about-carousel-window">
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
              moviesVerticlePosition={moviesContentVertPos}
              musicVerticlePosition={musicContentVertPos}
              gamesVerticlePosition={gamesContentVertPos}
            />
          </div>
        </div>
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.movies && 
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={sideTopBtnOnClick}>
              {(moviesContentVertPos === 0) ? 
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={sideBotBtnOnClick}>
                {(moviesContentVertPos + getFunSlideScrollHeight() >= getFunSlideTotalHeight()) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.music &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={sideTopBtnOnClick}>
              {(musicContentVertPos === 0) ? 
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={sideBotBtnOnClick}>
                {(musicContentVertPos + getFunSlideScrollHeight() >= getFunSlideTotalHeight()) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.videoGames &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={sideTopBtnOnClick}>
              {(gamesContentVertPos === 0) ? 
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={sideBotBtnOnClick}>
                {(gamesContentVertPos + getFunSlideScrollHeight() >= getFunSlideTotalHeight()) ? 
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