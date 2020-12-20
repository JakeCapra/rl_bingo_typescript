import React from 'react';
import winVid from './images/winVideo.mp4';

function WinScreen(props: any) {

    return (
        <div id="popup">
            <div id="popupInner">  
                <video width="80%" height="auto" autoPlay={true} loop={true} muted={true} id="winVid" style={{float: 'left', margin: '1vw'}}>
                    <source src={winVid} type="video/mp4" />
                </video>
                <h2 style={{paddingTop: '5vw'}}>You Win!</h2>
                <a href="https://www.reddit.com/r/RocketLeague/comments/9r1xjm/this_is_rocket_league_a_fanmade_animation/" target="_blank"><h3>Video Credit</h3></a>
                <button onClick={props.closePopup}>Close</button>  
            </div>
        </div>
    );
}

export default WinScreen;