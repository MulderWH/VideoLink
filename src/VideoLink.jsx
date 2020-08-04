<script src="http://localhost:8097"></script>;
import { Component, createElement } from "react";

import VideoDetail from "./components/VideoDetail";

export class VideoLink extends Component {
    render() {
        return (
            <VideoDetail
                getid={this.props.yourEmbedCode.value}
                getheight={this.props.yourHeight.value}
                getwidth={this.props.yourWidth.value}
            />
        );
    }
}
