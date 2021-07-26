import React from 'react';

// globals
import { isBrowserIE } from '../../Globals/index.js';

function Intro(props) {
  const { data } = props;
  return (
    <div className="div-proj-card" style={isBrowserIE() ? {justifySelf: "auto", perspective: "none", cursor: "auto"} : {}}>
      <div className="div-proj-card-container" style={isBrowserIE() ? {transformStyle: "flat", transform: "none", overflow: "hidden"} : {}}>
        {isBrowserIE() &&
          <div className="div-ie-overlay-dropdown">
            {data.hasGitHubUrl && <a href={data.gitHubUrl}>Github</a>}
            {data.hasWebsiteUrl && <a href={data.websiteUrl}>Website</a>}
          </div>
        }
        <div className="div-proj-card-front" style={isBrowserIE() ? {position: "static", backfaceVisibility: "visible"} : {}}>
          <figure>{data.img && <img src={data.img} alt="S and J Architecture" />}</figure>
          <div className="div-proj-card-front-content">
            <div className="tags">
              {data.tags.map((tagName, i) =>
                <span key={i} className="tag">{tagName}</span>
              )}
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <div className={data.hasGitHubUrl && data.hasWebsiteUrl ? "urls flex-sb-1024" : "urls flex-ct-1024"}>
              {data.hasGitHubUrl && <a href={data.gitHubUrl}>Github</a>}
              {data.hasWebsiteUrl && <a href={data.websiteUrl}>Website</a>}
            </div>
          </div>
        </div>
        {!isBrowserIE() &&
          <div className="div-proj-card-back">
            {data.hasGitHubUrl && <a href={data.gitHubUrl}>Github</a>}
            {data.hasWebsiteUrl && <a href={data.websiteUrl}>Website</a>}
          </div>
        }
      </div>
    </div>
  );
}

export default Intro;