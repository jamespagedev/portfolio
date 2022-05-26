import React from 'react';

const MusicContent = props => {
  const { isMusicSelected, musicVerticlePosition } = props;

  return (
    <div className={isMusicSelected ? "div-about-fun-content-lists" : "display-none"} id="music-content" style={{top: `-${musicVerticlePosition}px`}}>
      <ul id="music-content-list-default">
        <li><a href="https://www.youtube.com/watch?v=Zdodvjw2zt8" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>10 Years - Just Can't Win</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=ny8GnxOqDBs" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>10 Years - Forever Fields</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=FPWJ8cYxw6M" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>30 Seconds To Mars - From Yesterday</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=_s3SH-9U5cY" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>AFI - God Called In Sick Today</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=9EcMH1FTOx0" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>AFI - Miseria Cantare - The Beginning</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=L_gi10fjkhw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Alien Ant Farm - Movies</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=0npUikfeMSE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Alter Bridge - Wayword One</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=l1eur0I5J8w" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Anberlin - The Feel Good Drag</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=fCv7FlcfAUw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Angels and Airwaves - The Adventure Final</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=iDuTSTzgPPo" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Anti-Flag - 911 For Peace</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=iSCpfivdjig" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Ashes Divide - Enemies</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=b_9JSjxvJos" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Blindside - All Of Us</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=AiBG6vuLrzY" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Breaking Benjamin - The Diary Of Jane</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=pzMvqv_3nfM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Breaking Benjamin - So Cold</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=i_KBKDqraO4" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Celldweller - The Best It's Gonna Get</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=-t3mMi__ruY" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Charon - Colder</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=oBF6At0SWWk" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Chevelle - Same Old Trip</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=s3Bvblg5Sik" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Chevelle - Sleep Apnea</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=sT9zBeDVgIM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Coheed and Cambria - In Keeping Secrets of Silent Earth 3</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=02FVRMhKR9I" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Danzig - How The Gods Kill</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=4zYPCihqfO0" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Dido - Here With Me</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=MMjyqKnARKo" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Dope - Always</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=g_sFZ0NJQks" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Flaw - Whole</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=Nioflv9Xn5I" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Globius - Take Me Away</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=isCh4kCeNYU" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Guns N' Roses - Civil War</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=gp_O2COE0mk" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Innerpartysystem - Don't Stop (Only This Version)</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=wCejX8vMzXM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Innerpartysystem - Last Night In Brooklyn</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=FKgxkxbxI7Q" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Jem - 24</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=sp83ZbxuUdk" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Kansas - Dust In The Wind</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=g-Abuc7ddu0" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Kaskade - Eyes (Kaskade's ICE Mix)</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=1lAdfEsf4p8" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Kevin Rudolf ft. Lil Wayne - Let It Rock</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=0r7Bb8fwJVI" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Leaves Eyes - Elegy</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=K5tYAvTV0cA" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Leaves Eyes - Tales Of The Sea Maid</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=i1SWfIhROxE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Lucina Coil - Heaven's A Lie</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=TBcosYiERV0" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Lucina Coil - Enjoy The Silence</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=MzW8WSeIL6Y" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Mellowdrone - Fall On Your Knees</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=ebN6EBh8xDA" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Metallica - Master Of Puppets (Album)</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=vInuryzvMwM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Mew - Special</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=wSenWOyC0V4" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Muse - Plug In Baby</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=LsPcfhdWUWQ" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Must - Freechild</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=MkLdUp9jRmg" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>NOFX - Electricity</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=qnFVMkTWaBw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>NOFX - The Decline</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=znvAJ5d_7ZM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Nothing More - This Is The Time (Ballast)</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=tEPB7uzKuh4" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Pendulum - Watercolour</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=nIJ8DogiIiw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Placebo - Running Up That Hill</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=FMvppW6kfIE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>RA - Do You Call My Name</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=0R6WIbx8ysE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Real Life - Send Me An Angel</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=5aLfCslnRr4" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Republica - Ready To Go</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=vk1M3Esm-S0" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Red - Lost</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=4x6US_UHvrc" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Nothing More - Jenny lyrics</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=f47TZePukuQ" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Rolling Stones - Sympathy For The Devil</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=mq5x3ZetnTY" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Saliva - You're Disease</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=bCwa-8ViWVE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Scars On Broadway - Serious</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=TPzU1Uz8ujw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Silversun Pickups - The Royal We</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=Ol4Dko3rw28" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Silversun Pickups - Last Dance</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=m7Nioh8wq3w" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Skillet - Rebirthing</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=Lr58WHo2ndM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Smashing Pumpkins - 1979</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=x5GG_fr8WyM" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Smashing Pumpkins - Disarm</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=HQWWmcbrBiw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Softcell - Tainted Love (Full Mix)</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=TZThOsCv2Mw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Soundgarden - Black Hole Sun</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=vnH46jE5odo" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Stratovarius - Eternity</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=F4PqX9_wZ2Y" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Switchfoot - Awakening</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=ovaZ0KfIWiE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Tatu - Perfect Enemy</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=Wtt-ymYKoWI" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Taking Back Sunday - Everything Must Go</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=8NPgVESNjPg" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>The Birthday Massacre - Happy Birthday</p></div></a></li>
      </ul>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=BfBT1D04SoE" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>The Killers - Jenny Was A Friend Of Mine</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=dy3O9N479i8" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>The Killers - Smile Like You Mean It</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=PscuNdwFQQw" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>The Misfits - Halloween</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=4kBsDJYjC-8" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>Used - The Taste Of Ink</p></div></a></li>
        <li><a href="https://www.youtube.com/watch?v=8Eh7xqWCFdU" target="_blank" rel="noopener noreferrer"><div className="div-about-fun-youtube-icon"><p>VNV Nation - Dark Angel</p></div></a></li>
      </ul>
    </div>
  )
}

export default MusicContent;