import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        console.log(`https://www.youtube.com/watch?v=${video.id.videoId}`)
        console.log(video)
        if (video.id.kind == "youtube#video") {
            return (
                <VideoItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
            )
        }
    })

    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList