import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faMusic, faGamepad } from '@fortawesome/free-solid-svg-icons'

// Components
import MoviesContent from './MoviesContent.js';
import MusicContent from './MusicContent.js';
import VideoGamesContent from './VideoGamesContent.js';

// Globals
import { hobbyTabIds } from '../../Globals/index.js';

const FunSlide = props => {
  const { 
          hobbyTabIdSelected, handleChangeTab, moviesVerticlePosition,
          musicVerticlePosition, gamesVerticlePosition
        } = props;

  return (
    <div className="div-about-fun">
      <div className="div-about-fun-tabs">
        <button
          className={hobbyTabIdSelected === hobbyTabIds.movies ?
            "button-about-fun-tab-selected" :
            "button-about-fun-tab"
          }
          onClick={() => handleChangeTab(hobbyTabIds.movies)}
        ><figure><FontAwesomeIcon icon={faVideo}/></figure><span>Movies</span></button>
        <button
          className={hobbyTabIdSelected === hobbyTabIds.music ?
            "button-about-fun-tab-selected" :
            "button-about-fun-tab"
          }
          onClick={() => handleChangeTab(hobbyTabIds.music)}
        ><figure><FontAwesomeIcon icon={faMusic}/></figure><span>Music</span></button>
        <button
          className={hobbyTabIdSelected === hobbyTabIds.videoGames ?
            "button-about-fun-tab-selected" :
            "button-about-fun-tab"
          }
          onClick={() => handleChangeTab(hobbyTabIds.videoGames)}
        ><figure><FontAwesomeIcon icon={faGamepad}/></figure><span>Video&nbsp;Games</span></button>
      </div>
      <div className="div-about-fun-content">
        <MoviesContent isMoviesSelected={hobbyTabIdSelected === hobbyTabIds.movies} moviesVerticlePosition={moviesVerticlePosition} />
        <MusicContent isMusicSelected={hobbyTabIdSelected === hobbyTabIds.music} musicVerticlePosition={musicVerticlePosition} />
        <VideoGamesContent isVideoGamesSelected={hobbyTabIdSelected === hobbyTabIds.videoGames} gamesVerticlePosition={gamesVerticlePosition} />
      </div>
    </div>
  )
}

export default FunSlide;