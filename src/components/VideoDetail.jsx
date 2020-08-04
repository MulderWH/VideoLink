<script src="http://localhost:8097"></script>;
import React, { useRef, useState, createElement } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoDetail = ({ getid, getheight, getwidth }) => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const height = parseInt(getheight, 10);
    const width = parseInt(getwidth, 10);

    return (
        <YoutubePlayer
            ref={playerRef}
            height={height}
            width={width}
            videoId={getid}
            play={playing}
            onChangeState={event => console.log(event)}
            onReady={() => console.log("ready")}
            onError={e => console.log(e)}
            onPlaybackQualityChange={q => console.log(q)}
            volume={50}
            playbackRate={1}
            playerParams={{
                cc_lang_pref: "us",
                showClosedCaptions: true
            }}
        />
    );
};

export default VideoDetail;
