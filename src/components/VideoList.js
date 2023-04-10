import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
        console.log(`https://www.youtube.com/watch?v=${video.id.videoId}`)
        if (video.id.kind == "youtube#video") {
            return (
                <VideoItem />
            )
        }
    })

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default VideoList