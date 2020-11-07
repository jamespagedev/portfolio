import React from 'react';

const MoviesContent = props => {
  const { isMoviesSelected } = props;

  return (
    <div className={isMoviesSelected ? "div-about-left-movies-content" : "display-none"}>
      <ul>
        <li>The Peaceful Warrior</li>
        <li>The Count of Monte Cristo</li>
        <li>The Devils Advocate</li>
        <li>Legend (1985)</li>
        <li>The Wizard</li>
      </ul>
      <ul>
        <li>The Shawshank Redemption</li>
        <li>Bruce Almighty</li>
        <li>Liar Liar</li>
        <li>The Mask</li>
        <li>Robin Hood (1991)</li>
      </ul>
      <ul>
        <li>Leathal Weapon 4</li>
        <li>Romeo Must Die</li>
        <li>Never Back Down</li>
        <li>Terminator 1, and 2</li>
        <li>True Lies</li>
      </ul>
      <ul>
        <li>First Knight</li>
        <li>The Rock</li>
        <li>Blade 1, 2, and 3</li>
        <li>The Art Of War</li>
        <li>U.S. Martials</li>
      </ul>
      <ul>
        <li>Home Alone 1 and 2</li>
        <li>Point Break</li>
        <li>Constantine</li>
        <li>The Lawnmower Man</li>
        <li>Ronin</li>
      </ul>
      <ul>
        <li>Analyze This</li>
        <li>Fight Club</li>
        <li>The Score</li>
        <li>Limitless</li>
        <li>The Recruit</li>
      </ul>
      <ul>
        <li>The Lost Boys</li>
        <li>Robocop (1987)</li>
        <li>Batman (1989)</li>
        <li>The Wraith</li>
        <li>Billy Madison</li>
      </ul>
      <ul>
        <li>Happy Gilmore</li>
        <li>Coneheads</li>
        <li>The Golden Child</li>
        <li>Beverly Hills Cop 1, 2, and 3</li>
        <li>Tremors 1-4</li>
      </ul>
      <ul>
        <li>The Jackal</li>
        <li>Demolition Man</li>
        <li>Predator</li>
        <li>Jingle All The Way</li>
        <li>The Whole 9 Yards</li>
      </ul>
      <ul>
        <li>A Dangerous Place</li>
        <li>Ace Ventura</li>
        <li>TMNT (Original 1 and 2)</li>
        <li>Look Who's Talking Now</li>
        <li>Tombstone</li>
      </ul>
      <ul>
        <li>Vampire Hunter D</li>
        <li>Macross Plus</li>
        <li>Twilight of the Dark Master</li>
        <li>Ninja Scroll</li>
        <li>Doomed Megalopolis</li>
      </ul>
      <ul>
        <li>George Carlin</li>
        <li>Highlander</li>
        <li>Spawn (The Animated Series)</li>
        <li>Family Guy</li>
        <li>Married With Children</li>
      </ul>
    </div>
  )
}

export default MoviesContent;