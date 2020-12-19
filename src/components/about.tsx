import React from 'react';
import GitHubLogo from './images/githubLogo.png';
import SteamLogo from './images/steamLogo.png';
import youTubeLogo from './images/youTubeLogo.png';
import redditLogo from './images/redditLogo.png';

function About() {
    
    return (
        <div id="about">
            <h3>This is based off a video made by <a href="https://www.youtube.com/channel/UCocHtA1ADT6kTObipYzJoww">SunlessKhan</a></h3>
            <h3>
                <a href="https://www.youtube.com/watch?v=-3aVf_LilUc" target="_blank"><img className="logoLink" src={youTubeLogo}></img></a>
                <a href="https://www.reddit.com/r/RocketLeague/" target="_blank"><img className="logoLink" src={redditLogo}></img></a>
                </h3>
            <h3>
                <a href="https://github.com/JakeCapra/rlbingo" target="_blank"><img className="logoLink" src={GitHubLogo}></img></a>
                <a href="https://steamcommunity.com/id/hip_dips/" target="_blank"><img className="logoLink" src={SteamLogo}></img></a>
            </h3>
        </div>
    )
}

export default About;