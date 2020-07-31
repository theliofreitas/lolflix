import React from 'react';
import { Video } from './styles';
import VideoFile from '../../assets/video/warriors.mp4';

function BannerVideo() {
    return (
        <>
            <Video 
                autoPlay="autoplay"
                controls="controls"
                src={VideoFile}> 
            </Video>
        </>
       
    );
}

export default BannerVideo;