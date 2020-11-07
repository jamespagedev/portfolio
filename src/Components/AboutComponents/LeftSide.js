import React from 'react';

// Components
import MoviesContent from './MoviesContent.js';
import MusicContent from './MusicContent.js';
import VideoGamesContent from './VideoGamesContent.js';

const LeftSide = props => {
  const { hobbyTabIdSelected, setHobbyTabIdSelected, hobbyTabIds } = props;
  return (
    <div className="div-about-left">
      <h1>What I Do For Fun</h1>
      <div className="div-about-left-tabs">
        <button
          className={hobbyTabIdSelected === hobbyTabIds.movies ?
            "button-about-left-tab-selected" :
            "button-about-left-tab"
          }
          onClick={() => setHobbyTabIdSelected(hobbyTabIds.movies)}
        >Movies</button>
        <button
          className={hobbyTabIdSelected === hobbyTabIds.music ?
            "button-about-left-tab-selected" :
            "button-about-left-tab"
          }
          onClick={() => setHobbyTabIdSelected(hobbyTabIds.music)}
        >Music</button>
        <button
          className={hobbyTabIdSelected === hobbyTabIds.videoGames ?
            "button-about-left-tab-selected" :
            "button-about-left-tab"
          }
          onClick={() => setHobbyTabIdSelected(hobbyTabIds.videoGames)}
        >Video&nbsp;Games</button>
      </div>
      <MoviesContent isMoviesSelected={hobbyTabIdSelected === hobbyTabIds.movies} />
      <MusicContent isMusicSelected={hobbyTabIdSelected === hobbyTabIds.music} />
      <VideoGamesContent isVideoGamesSelected={hobbyTabIdSelected === hobbyTabIds.videoGames} />
    </div>
  )
}

export default LeftSide;