import React from 'react';
import "semantic-ui-css/semantic.min.css"

import "../styles/videoPreview.css"

const VideoPreview = ({ vid }) => {
    return (
        <div className="VideoPreviewContainer"  >
            {/* <img src={vid.snippet.thumbnails.high.url} /> */}
            <div className='ui embed'>
                <iframe src={`https://youtube.com/embed/${vid.id.videoId}`} />
            </div>
            <div className='ui segment'>
                <h4>{vid.snippet.title}</h4>
                <b><span>{vid.snippet.channelTitle}</span></b>
                <p>{vid.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoPreview