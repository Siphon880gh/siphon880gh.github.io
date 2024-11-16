import React, { Component, useState } from "react";
import { Carousel } from 'react-bootstrap';
import "./VideoGallery.css"

import YouTube from 'react-youtube';

/**
 * VideoGallery
 * This is a reusable React component that displays a carousel gallery of Youtube videos
 *
 * @module VideoGallery
 * @param {Props} props
 * @returns {JSX.Element}
 * 
 */
/**
 * Props for the component.
 * 
 * @typedef {Object} Props 
 * @property {Array<Video>} videos - The array of video objects. Must be passed from parent component. Parent component could've imported it from another module though.
 *
 * @typedef {Video} 
 * @property {string} id - An id to identify the video for React keying purposes
 * @property {string} title - The title that shows for the active video in the Video Youtube Carousel Gallery
 * @property {string} thumbnail - The thumbnail that appears for the active video
 * @property {string} url - The video link that opens when the user clicks a thumbnail or title.
*/
export default function VideoGallery({videos, ytHeaderCover}) {
    const [index, setIndex] = useState(0);

    const [lastPlayed, setLastPlayed] = useState(null);

    const handleSelect = (selectedIndex) => {
        // Pause any playing video
        if(lastPlayed!==null) {
            lastPlayed.pauseVideo();
        }

        // Change view
        setIndex(selectedIndex);
    }

    return (
        <div className="carousel-wrapper">
            <header className="yt-gallery-header"
                style={{

                    backgroundImage: `url(${ytHeaderCover})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                <h3 className="blur-gradient">
                    <a href="//www.youtube.com/@WayneTeachesCode" target="_blank">
                        <i className="fab fa-youtube">&nbsp;</i>My Tutorials
                    </a>
                </h3>
            </header>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {videos.map((video,id) => (
                    <Carousel.Item key={video.id}>

                        <div className="video-responsive-wrapper">
                            <div className="video-responsive">
                                <YouTube
                                    key={`video${id}`}
                                    id={`video${id}`}
                                    videoId={video.embedId}
                                    onPlay={(event)=>{
                                        setLastPlayed(event.target);
                                    }}
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h3 className="clickable" onClick={()=>{ window.open(video.url) }}>{video.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}