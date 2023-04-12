import React from 'react';
import "semantic-ui-css/semantic.min.css"

import "../styles/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className='video-item item'>
            <img onClick={() => { onVideoSelect(video) }} src={video.snippet.thumbnails.medium.url} className='ui image' />
            <div className='content content-container' onClick={() => { onVideoSelect(video) }} >
                <div className='vid-header' >{video.snippet.title}</div>
                <b><span>{video.snippet.channelTitle}</span></b>
                <p className='description'>{video.snippet.description}</p>
            </div>
        </div >
    )
}

export default VideoItem