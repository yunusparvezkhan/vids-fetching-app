import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    return (
        <div>
            <VideoItem video={videos.length} />
        </div>
    )
}

export default VideoList