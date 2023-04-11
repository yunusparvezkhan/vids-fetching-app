import React from 'react';
import "semantic-ui-css/semantic.min.css"

import "../styles/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className='video-item item'>
            <img onClick={() => { onVideoSelect(video) }} src={video.snippet.thumbnails.medium.url} className='ui image' />
            <div className='content' onClick={() => { onVideoSelect(video) }} >
                <div className='header' >{video.snippet.title}</div>
                <p className='description'>{video.snippet.description}</p>
            </div>
        </div >
    )
}

export default VideoItem