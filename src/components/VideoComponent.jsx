import { useEffect, useRef, useState } from 'react';

/* eslint-disable jsx-a11y/media-has-caption */
export const VideoComponent = ({ src }) => {
    const v = useRef();
    const [muted, setMuted] = useState(true);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

    useEffect(() => {
        if (v.current && !hasAutoPlayed) {
            console.log('hooking to vid');
            console.log(v.current.controller);
            // v.current.play();
            v.current.addEventListener('play', () => {
                setTimeout(() => {
                    setHasAutoPlayed(true);
                    setMuted(false);
                }, 100);
            });
        }
    }, [v]);

    return (
        <video
            autoPlay
            crossOrigin="anonymous"
            width="full"
            className="w-full aspect-video rounded-lg shadow-md"
            controls
            ref={v}
            muted={muted}
        >
            <source src={src + '.mp4'} type="video/mp4" />
            <source src={src + '.webm'} type="video/webm" />
            <source src={src + '.mkv'} type="video/mkv" />
            Your browser does not support the video tag.
        </video>
    );
};
