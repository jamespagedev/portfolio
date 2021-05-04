import React from 'react';

const MoviesContent = props => {
  const { isMoviesSelected, moviesVerticlePosition } = props;

  return (
    <div className={isMoviesSelected ? "div-about-fun-content-lists" : "display-none"} id="movies-content" style={{top: `-${moviesVerticlePosition}px`}}>
      <ul id="movies-content-list-default">
        <li><a href="https://www.imdb.com/title/tt0438315/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Peaceful Warrior (2006)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0245844/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Count of Monte Cristo (2002)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0118971/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Devils Advocate (1997)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0111161/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Shawshank Redemption (1994)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0098663/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Wizard (1989)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0089469/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Legend (1985)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0315327/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Bruce Almighty (2003)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0119528/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Liar Liar (1997)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0110475/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Mask (1994)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0102798/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Robin Hood (1991)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0122151/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Leathal Weapon 1-4 (1987, 1989, 1992, 1998)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0165929/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Romeo Must Die (2000)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt1023111/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Never Back Down (2008)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0088247/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Terminator (1984), and T2 (1991)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0111503/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>True Lies (1994)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0113071/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>First Knight (1995)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0117500/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Rock (1996)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0120611/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Blade 1, 2, and 3 (1998, 2002, 2004)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0160009/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Art Of War (2000)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0120873/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>U.S. Martials (1998)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0099785/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Home Alone 1 and 2 (1990, 1992)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0102685/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Point Break (1991)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0360486/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Constantine (2005)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0104692/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Lawnmower Man (1992)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0122690/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Ronin (1998)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0122933/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Analyze This (1999)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0137523/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Fight Club (1999)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0227445/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Score (2001)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt1219289/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Limitless (2011)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0292506/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Recruit (2003)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0093437/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Lost Boys (1987)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0093870/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Robocop (1987)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0096895/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Batman (1989)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0092240/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Wraith (1986)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0112508/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Billy Madison (1995)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0116483/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Happy Gilmore (1996)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0106598/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Coneheads (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0091129/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Golden Child (1986)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0086960/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Beverly Hills Cop 1, 2, and 3 (1984, 1987, 1994)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0100814/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Tremors 1-4 (1990, 1996, 2001, 2004)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0119395/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Jackal (1997)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0106697/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Demolition Man (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0093773/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Predator (1987)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0116705/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Jingle All The Way (1996)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0190138/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Whole 9 Yards (2000)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0083944/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Rambo 1-3 (1982, 1985, 1988)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0078748/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Alien (1979 and 1986)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0087332/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Ghost Busters 1 and 2 (1984, 1989)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt1320253/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Expendables 1-3 (2010, 2012, 2014)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt1186367/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Ninja Assassin (2009)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0090859/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Cobra (1986)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0267804/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The One (2001)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0293662/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Transporter 1 and 2 (2002, 2005)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0092099/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Top Gun (1986)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0232500/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Fast and the Furious (2001)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0118998/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Doctor Dolittle (1998)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0110123/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>In the Army Now (1994)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0107120/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Hocus Pocus (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0105793/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Waynes World 1 and 2 (1992, 1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0133093/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Matrix (1999)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0120812/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Rush Hour 1 and 2 (1998, 2001)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0108037/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Sandlot (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0116629/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Independence Day (1996)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0094291/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Wall Street (1987)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0108333/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>The Three Musketeers (1993)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0097523/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Honey, I Shrunk the Kids (1989)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0107985/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Rookie of the Year (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0086567/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>War Games (1983)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0087363/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Gremlins (1984)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0119094/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Face Off (1997)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0107696/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>A Dangerous Place (1994)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0109040/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Ace Ventura (1994)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0100758/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>TMNT 1 and 2 (1990, 1991)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0107438/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Look Who's Talking Now (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0108358/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Tombstone (1993)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/title/tt0090248/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Vampire Hunter D (1985)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt2330912/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Macross Plus (1995)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0279487/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Twilight of the Dark Master (1997)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0107692/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Ninja Scroll (1993)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0337283/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Doomed Megalopolis 1-4 (1991-1992)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.imdb.com/news/ni2679909/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>George Carlin</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0103442/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Highlander Series (1992-1998)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0118475/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Spawn - The Animated Series (1997-1999)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0182576/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Family Guy (1999-present)</p></div></a></li>
        <li><a href="https://www.imdb.com/title/tt0092400/" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-imdb-icon"><p>Married With Children (1987 - 1997)</p></div></a></li>
      </ul>
    </div>
  )
}

export default MoviesContent;