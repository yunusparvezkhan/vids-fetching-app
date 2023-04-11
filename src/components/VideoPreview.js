import React from 'react';
import "../styles/videoPreview.css"

const VideoPreview = (props) => {
    console.log("succesfull")
    return (
        <div className="VideoPreviewContainer"  >
            <img src={props.vid.snippet.thumbnails.high.url} />
        </div>
    )
}

export default VideoPreview