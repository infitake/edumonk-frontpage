import React from 'react'
import Slide from 'react-reveal/Slide';

function SocialMedia() {
    return (
        <div>
            <Slide left>
                <div className="youtube">
                    <a href="https://www.youtube.com/channel/UC5Q6kbXwwZ79aydaoe80R2Q" target="_blank" rel="noopener noreferrer">
                        <img src="/images/youtube.png" alt="youtube-icon" className="youtube-image"/>
                    </a>
                </div>
            </Slide>
            <Slide right> 
                <div className="facebook">
                    <a href="https://m.facebook.com/edumonkfoundation/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/images.png" alt="facebook-icon" className="facebook-image"/>
                    </a>
                </div>
            </Slide>
        </div>
    )
}

export default SocialMedia
