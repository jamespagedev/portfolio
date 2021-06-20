import React, { useLayoutEffect, useEffect, useState } from 'react';
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
  const slideIndexes = {education: 1, history: 2, fun: 3};
  const [slideIndex, setSlideIndex] = useState(slideIndexes.education);
  const [hasScrollUpDown, setHasScrollUpDown] = useState(false);
  const [hobbyTabIdSelected, setHobbyTabIdSelected] = useState(hobbyTabIds.movies);
  const [moviesContentResolution, setMoviesContentResolution] = useState({totalHeight: 0, positionHeight: 0, listBlockHeight: 0, scrollHeight: 0});
  const [musicContentResolution, setMusicContentResolution] = useState({totalHeight: 0, positionHeight: 0, listBlockHeight: 0, scrollHeight: 0});
  const [gamesContentResolution, setGamesContentResolution] = useState({totalHeight: 0, positionHeight: 0, listBlockHeight: 0, scrollHeight: 0});

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
    const totalHeightRefreshed = getFunSlideTotalHeight();
    const scrollHeightRefreshed = getFunSlideScrollHeight();
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      const moviesPositionHeightRefreshed = moviesContentResolution.positionHeight - scrollHeightRefreshed;
      (moviesPositionHeightRefreshed < 0) ?
        setMoviesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: totalHeightRefreshed - scrollHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed}) : 
        setMoviesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: moviesPositionHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed});
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      const musicPositionHeightRefreshed = moviesContentResolution.positionHeight - scrollHeightRefreshed;
      (musicPositionHeightRefreshed < 0) ?
        setMusicContentResolution({totalHeight: totalHeightRefreshed, positionHeight: totalHeightRefreshed - scrollHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed}) : 
        setMusicContentResolution({totalHeight: totalHeightRefreshed, positionHeight: musicPositionHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed});
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      const gamesPositionHeightRefreshed = moviesContentResolution.positionHeight - scrollHeightRefreshed;
      (gamesPositionHeightRefreshed < 0) ?
        setGamesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: totalHeightRefreshed - scrollHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed}) : 
        setGamesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: gamesPositionHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed});
    }
  }

  const sideBotBtnOnClick = () => {
    const totalHeightRefreshed = getFunSlideTotalHeight();
    const scrollHeightRefreshed = getFunSlideScrollHeight();
    if (hobbyTabIdSelected === hobbyTabIds.movies) {
      const moviesPositionHeightRefreshed = moviesContentResolution.positionHeight + scrollHeightRefreshed;
      (moviesPositionHeightRefreshed >= totalHeightRefreshed) ?
        setMoviesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: 0, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed}) : 
        setMoviesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: moviesPositionHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed});
    } else if (hobbyTabIdSelected === hobbyTabIds.music) {
      const musicPositionHeightRefreshed = musicContentResolution.positionHeight + scrollHeightRefreshed;
      (musicPositionHeightRefreshed >= totalHeightRefreshed) ?
        setMusicContentResolution({totalHeight: totalHeightRefreshed, positionHeight: 0, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed}) : 
        setMusicContentResolution({totalHeight: totalHeightRefreshed, positionHeight: musicPositionHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed});
    } else if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
      const gamesPositionHeightRefreshed = gamesContentResolution.positionHeight + scrollHeightRefreshed;
      (gamesPositionHeightRefreshed >= totalHeightRefreshed) ?
        setGamesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: 0, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed}) : 
        setGamesContentResolution({totalHeight: totalHeightRefreshed, positionHeight: gamesPositionHeightRefreshed, listBlockHeight: getFunSlideListBlockHeight(), scrollHeight: scrollHeightRefreshed});
    }
  }

  // setup
  useEffect(() => {
    const handleResize = debounce(() => {
      if (hobbyTabIdSelected === hobbyTabIds.movies) {
        const newContentResolution = {}
        newContentResolution.totalHeight = getFunSlideTotalHeight();
        newContentResolution.positionHeight = moviesContentResolution.positionHeight;
        newContentResolution.listBlockHeight = moviesContentResolution.listBlockHeight;
        newContentResolution.scrollHeight = getFunSlideScrollHeight();
        console.log(newContentResolution)
        setMoviesContentResolution(newContentResolution);
      }
      if (hobbyTabIdSelected === hobbyTabIds.music) {
        const newContentResolution = {}
        newContentResolution.totalHeight = getFunSlideTotalHeight();
        newContentResolution.positionHeight = musicContentResolution.positionHeight;
        newContentResolution.listBlockHeight = musicContentResolution.listBlockHeight;
        newContentResolution.scrollHeight = getFunSlideScrollHeight();
        setMusicContentResolution(newContentResolution);
      }
      if (hobbyTabIdSelected === hobbyTabIds.videoGames) {
        const newContentResolution = {}
        newContentResolution.totalHeight = getFunSlideTotalHeight();
        newContentResolution.positionHeight = gamesContentResolution.positionHeight;
        newContentResolution.listBlockHeight = gamesContentResolution.listBlockHeight;
        newContentResolution.scrollHeight = getFunSlideScrollHeight();
        setGamesContentResolution(newContentResolution);
      }
    }, 100);

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesContentResolution, musicContentResolution, gamesContentResolution]);

  useLayoutEffect(() => {
    if (hobbyTabIdSelected === hobbyTabIds.movies && moviesContentResolution.totalHeight === 0) {
      const newContentResolution = {}
      newContentResolution.totalHeight = getFunSlideTotalHeight();
      newContentResolution.positionHeight = 0;
      newContentResolution.listBlockHeight = getFunSlideListBlockHeight();
      newContentResolution.scrollHeight = getFunSlideScrollHeight();
      setMoviesContentResolution(newContentResolution);
    }
    if (hobbyTabIdSelected === hobbyTabIds.music && musicContentResolution.totalHeight === 0) {
      const newContentResolution = {}
      newContentResolution.totalHeight = getFunSlideTotalHeight();
      newContentResolution.positionHeight = 0;
      newContentResolution.listBlockHeight = getFunSlideListBlockHeight();
      newContentResolution.scrollHeight = getFunSlideScrollHeight();
      setMusicContentResolution(newContentResolution);
    }
    if (hobbyTabIdSelected === hobbyTabIds.videoGames && gamesContentResolution.totalHeight === 0) {
      const newContentResolution = {}
      newContentResolution.totalHeight = getFunSlideTotalHeight();
      newContentResolution.positionHeight = 0;
      newContentResolution.listBlockHeight = getFunSlideListBlockHeight();
      newContentResolution.scrollHeight = getFunSlideScrollHeight();
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
              moviesVerticlePosition={moviesContentResolution.positionHeight}
              musicVerticlePosition={musicContentResolution.positionHeight}
              gamesVerticlePosition={gamesContentResolution.positionHeight}
            />
          </div>
        </div>
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.movies && 
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={sideTopBtnOnClick}>
              {(moviesContentResolution.positionHeight === 0) ? 
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={sideBotBtnOnClick}>
                {(moviesContentResolution.positionHeight + moviesContentResolution.scrollHeight >= moviesContentResolution.totalHeight) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.music &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={sideTopBtnOnClick}>
              {(musicContentResolution.positionHeight === 0) ? 
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={sideBotBtnOnClick}>
                {(musicContentResolution.positionHeight + musicContentResolution.scrollHeight >= musicContentResolution.totalHeight) ? 
                  <span className="up-to-top" style={{paddingBottom: "2px"}}><FontAwesomeIcon icon={faChevronUp}/><FontAwesomeIcon icon={faChevronUp}/></span> :
                  <span style={{paddingTop: "4px"}}><FontAwesomeIcon icon={faChevronDown}/></span>
                }
              </button>
          </div>
        }
        {hasScrollUpDown && hobbyTabIdSelected === hobbyTabIds.videoGames &&
          <div className="div-about-fun-buttons">
              <button className="top-button" onClick={sideTopBtnOnClick}>
              {(gamesContentResolution.positionHeight === 0) ? 
                <span className="down-to-bottom" style={{paddingTop: "2px"}}><FontAwesomeIcon icon={faChevronDown}/><FontAwesomeIcon icon={faChevronDown}/></span> :
                <span style={{paddingBottom: "4px"}}><FontAwesomeIcon icon={faChevronUp}/></span>
              }
              </button>
              <button className="bottom-button" onClick={sideBotBtnOnClick}>
                {(gamesContentResolution.positionHeight + gamesContentResolution.scrollHeight >= gamesContentResolution.totalHeight) ? 
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