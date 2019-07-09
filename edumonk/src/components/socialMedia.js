import React from 'react'
import Fade from 'react-reveal/Fade';

function SocialMedia() {
    return (
        <div>
            <Fade left>
                <div className="youtube">
                    <a href="https://www.youtube.com/channel/UC5Q6kbXwwZ79aydaoe80R2Q" target="_blank" rel="noopener noreferrer">
                        <img src="/images/youtube.png" alt="youtube-icon" className="youtube-image" data-toggle="tooltip" data-placement="left" title="Subscribe"/>
                    </a>
                </div>
            </Fade>
            <Fade right> 
                <div className="facebook" >
                    <a href="https://m.facebook.com/edumonkfoundation/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/images.png" alt="facebook-icon" className="facebook-image" data-toggle="tooltip" data-placement="right" title="Like Us On Facebook"/>
                    </a>
                </div>
            </Fade>
        </div>
    )
}

export default SocialMedia
