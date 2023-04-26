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
            src={src}
            autoPlay
            crossOrigin="anonymous"
            width="full"
            className="w-full aspect-video rounded-lg shadow-md"
            controls
            ref={v}
            muted={muted}
        >
            Your browser does not support the video tag.
        </video>
    );
};
