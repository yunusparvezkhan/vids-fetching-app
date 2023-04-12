import React from 'react';
import "semantic-ui-css/semantic.min.css"

import "../styles/videoPreview.css"

const VideoPreview = ({ vid }) => {
    console.log("succesfull")
    return (
        <div className="VideoPreviewContainer"  >
            <img src={vid.snippet.thumbnails.high.url} />
            <div className='ui segment'>
                <h4>{vid.snippet.title}</h4>
                <p>{vid.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoPreview