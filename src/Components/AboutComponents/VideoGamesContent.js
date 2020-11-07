import React from 'react';

const VideoGamesContent = props => {
  const { isVideoGamesSelected } = props;

  return (
    <div className={isVideoGamesSelected ? "div-about-left-video-games-content" : "display-none"}>
      <ul>
        <li>(NES) Final Fantasy</li>
        <li>(NES) Dragon Warrior</li>
        <li>(NES) Zelda I and II</li>
        <li>(NES) Mega Man Series</li>
        <li>(NES) Crystalis</li>
      </ul>
      <ul>
        <li>(NES) Metroid</li>
        <li>(NES) TMNT II</li>
        <li>(NES) Double Dragon II</li>
        <li>(NES) Contra</li>
        <li>(NES) 1943</li>
      </ul>
      <ul>
        <li>(NES) Punch-out</li>
        <li>(NES) Castlevania II - Simon's Quest</li>
        <li>(NES) Ninja Gaiden II</li>
        <li>(NES) Battletoads</li>
        <li>(NES) Mario Series</li>
      </ul>
      <ul>
        <li>(SNES) Chrono Trigger</li>
        <li>(SNES) Secret Of Mana</li>
        <li>(SNES) Tales Of Phantasia</li>
        <li>(SNES) Secrewt Of Evermore</li>
        <li>(SNES) Lagoon</li>
      </ul>
      <ul>
        <li>(SNES) Super Mario Cart</li>
        <li>(SNES) R-Type</li>
        <li>(SNES) Street Fighter 2 Turbo</li>
        <li>(SNES) Final Fight 2</li>
        <li>(SNES) F-Zero</li>
      </ul>
      <ul>
        <li>(SNES) Legend Of Zelda - Link To The Past</li>
        <li>(SNES) Final Fantasy II (IV JP)</li>
        <li>(SNES) Final Fantasy III (VI JP)</li>
        <li>(SNES) TMNT 4</li>
        <li>(SNES) Super Off-Road</li>
      </ul>
      <ul>
        <li>(Sega-CD) Lunar The Silver Star</li>
        <li>(Sega-CD) Lunar Eternal Blue</li>
        <li>(Sega) Shining Force 1 and 2</li>
        <li>(Sega) Mortal Combat</li>
        <li>(Sega) Road Rash 2</li>
      </ul>
      <ul>
        <li>(Ps1) Final Fantasy 7</li>
        <li>(Ps1) Xenogears</li>
        <li>(Ps1) Star Ocean The Second Story</li>
        <li>(Ps1) Final Fantasy Tactics (Also WOTL Remake for PSP)</li>
        <li>(Ps1) Legend Of Dragoon</li>
      </ul>
      <ul>
        <li>(PS1) Parasite Eve</li>
        <li>(PS1) Metal Gear Solid</li>
        <li>(PS1) Silent Hill</li>
        <li>(PS1) Resident Evil 2</li>
        <li>(PS1) Omegaboost</li>
      </ul>
      <ul>
        <li>(PS2) Grandia 2</li>
        <li>(PS2) Ace Combat 04: Shattered Skies</li>
        <li>(Neo Geo/Arcade) SAMURAI SHODOWN II</li>
        <li>(Neo Geo/Arcade) Metal Slug</li>
        <li>(Arcade) The Simpsons</li>
      </ul>
      <ul>
        <li>(Arcade) Soul Edge</li>
        <li>(Arcade) Knights Of The Round</li>
        <li>(Arcade) X-Men</li>
        <li>(Arcade) The House Of The Dead 2</li>
        <li>(Arcade) Time Crisis</li>
      </ul>
      <ul>
        <li>(PC) Lineage 2 (2003 - 2008)</li>
        <li>(PC) Ragnarok Online (2001 - 2003)</li>
        <li>(PC) Counter String (1.3 - 1.4)</li>
        <li>(PC) Deus Ex 2000 (Also With Online Patch)</li>
        <li>(PC) Total Annihlation</li>
      </ul>
    </div>
  )
}

export default VideoGamesContent;