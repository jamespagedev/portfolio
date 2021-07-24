import React from 'react';

const VideoGamesContent = props => {
  const { isVideoGamesSelected, gamesVerticlePosition } = props;

  return (
    <div className={isVideoGamesSelected ? "div-about-fun-content-lists" : "display-none"} id="games-content" style={{top: `-${gamesVerticlePosition}px`}}>
      <ul id="games-content-list-default">
        <li><div className=""><p><span className="span-nes-logo">NES</span> Final Fantasy</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Dragon Warrior</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Zelda I and II</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Mega Man Series</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Crystalis</p></div></li>
      </ul>
      <ul>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Metroid</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> TMNT II</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Double Dragon II</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Contra</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> 1943</p></div></li>
      </ul>
      <ul>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Punch-out</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Castlevania II - Simon's Quest</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Ninja Gaiden II</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Battletoads</p></div></li>
        <li><div className=""><p><span className="span-nes-logo">NES</span> Mario Series</p></div></li>
      </ul>
      <ul>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Chrono Trigger</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Secret Of Mana</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Tales Of Phantasia</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Secret Of Evermore</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Lagoon</p></div></li>
      </ul>
      <ul>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Super Mario Cart</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> R-Type</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Street Fighter 2 Turbo</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Final Fight 2</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> F-Zero</p></div></li>
      </ul>
      <ul>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Legend Of Zelda - Link To The Past</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Final Fantasy II (IV JP)</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Final Fantasy III (VI JP)</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> TMNT 4</p></div></li>
        <li><div className=""><p className="p-snes-logo"><span>S</span><span>N</span><span>E</span><span>S</span> Super Off-Road</p></div></li>
      </ul>
      <ul>
        <li><div className="div-sega-cd-logo"><p>Lunar The Silver Star</p></div></li>
        <li><div className="div-sega-cd-logo"><p>Lunar Eternal Blue</p></div></li>
        <li><div className="div-sega-logo"><p>Shining Force 1 and 2</p></div></li>
        <li><div className="div-sega-logo"><p>Mortal Combat</p></div></li>
        <li><div className="div-sega-logo"><p>Road Rash 2</p></div></li>
      </ul>
      <ul>
        <li><div className="div-ps-one-logo"><p>Final Fantasy 7</p></div></li>
        <li><div className="div-ps-one-logo"><p>Xenogears</p></div></li>
        <li><div className="div-ps-one-logo"><p>Star Ocean The Second Story</p></div></li>
        <li><div className="div-ps-one-logo"><p>Final Fantasy Tactics</p></div></li>
        <li><div className="div-ps-one-logo"><p>Legend Of Dragoon</p></div></li>
      </ul>
      <ul>
        <li><div className="div-ps-one-logo"><p>Parasite Eve</p></div></li>
        <li><div className="div-ps-one-logo"><p>Metal Gear Solid</p></div></li>
        <li><div className="div-ps-one-logo"><p>Silent Hill</p></div></li>
        <li><div className="div-ps-one-logo"><p>Resident Evil 2</p></div></li>
        <li><div className="div-ps-one-logo"><p>Omegaboost</p></div></li>
      </ul>
      <ul>
        <li><div className="div-ps-two-logo"><p>Grandia 2</p></div></li>
        <li><div className="div-ps-two-logo"><p>Ace Combat 04: Shattered Skies</p></div></li>
        <li><div className="div-neo-geo-logo"><p>SAMURAI SHODOWN II</p></div></li>
        <li><div className="div-neo-geo-logo"><p>Metal Slug</p></div></li>
        <li><div className="div-arcade-logo"><p>The Simpsons</p></div></li>
      </ul>
      <ul>
        <li><div className="div-arcade-logo"><p>Soul Edge</p></div></li>
        <li><div className="div-arcade-logo"><p>Knights Of The Round</p></div></li>
        <li><div className="div-arcade-logo"><p>X-Men</p></div></li>
        <li><div className="div-arcade-logo"><p>The House Of The Dead 2</p></div></li>
        <li><div className="div-arcade-logo"><p>Time Crisis</p></div></li>
      </ul>
      <ul>
        <li><div className="div-pc-gamer-logo"><p>Lineage 2 (2003 - 2008)</p></div></li>
        <li><div className="div-pc-gamer-logo"><p>Ragnarok Online (2001 - 2003)</p></div></li>
        <li><div className="div-pc-gamer-logo"><p>Counter String (1.3 - 1.4)</p></div></li>
        <li><div className="div-pc-gamer-logo"><p>Deus Ex 2000 (With Online Patch)</p></div></li>
        <li><div className="div-pc-gamer-logo"><p>Total Annihlation</p></div></li>
      </ul>
    </div>
  )
}

export default VideoGamesContent;