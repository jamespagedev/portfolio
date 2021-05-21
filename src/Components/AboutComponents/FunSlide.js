import React from 'react';

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
        >Movies</button>
        <button
          className={hobbyTabIdSelected === hobbyTabIds.music ?
            "button-about-fun-tab-selected" :
            "button-about-fun-tab"
          }
          onClick={() => handleChangeTab(hobbyTabIds.music)}
        >Music</button>
        <button
          className={hobbyTabIdSelected === hobbyTabIds.videoGames ?
            "button-about-fun-tab-selected" :
            "button-about-fun-tab"
          }
          onClick={() => handleChangeTab(hobbyTabIds.videoGames)}
        >Video&nbsp;Games</button>
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