import React, { useRef, useEffect, useState } from 'react';
import './PlayerCard.css';
import Play from './assets/icons/Play.svg';
import Pause from './assets/icons/Pause.svg';
import Prev from './assets/icons/Prev.svg';
import Next from './assets/icons/Next.svg';

function Playercard({ song }) {
    const songRef = useRef(null);
    const ctrlImgRef = useRef(null);
    const progressRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (!song) return; // No song selected

        const audioElement = songRef.current;
        if (audioElement) {
            audioElement.src = song.mp3;
            audioElement.load(); // Load the new audio source

            const updateProgress = () => {
                setCurrentTime(audioElement.currentTime);
                setDuration(audioElement.duration);
                progressRef.current.value = audioElement.currentTime;
            };

            audioElement.addEventListener('loadedmetadata', updateProgress);
            audioElement.addEventListener('timeupdate', updateProgress);

            // Autoplay after setting the new source
            if (isPlaying) {
                audioElement.play().catch(error => {
                    console.log("Autoplay was prevented:", error);
                });
            }

            return () => {
                audioElement.removeEventListener('loadedmetadata', updateProgress);
                audioElement.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, [song, isPlaying]); // Update when song or isPlaying changes

    useEffect(() => {
        const audioElement = songRef.current;
        if (audioElement) {
            if (isPlaying) {
                audioElement.play().catch(error => {
                    console.log("Playback failed:", error);
                });
                ctrlImgRef.current.src = Pause;
            } else {
                audioElement.pause();
                ctrlImgRef.current.src = Play;
            }
        }
    }, [isPlaying]); // Update play/pause state when `isPlaying` changes

    const playpause = () => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const handleProgressChange = (e) => {
        const audioElement = songRef.current;
        if (audioElement) {
            audioElement.currentTime = e.target.value;
            setCurrentTime(e.target.value);
        }
    };

    return (
        <div className="w-[20rem] h-[25rem] bg-primary rounded-md px-3">
            <div className="flex flex-col mx-auto w-full pt-5 items-center h-full">
                <div
                    className="bg-cover w-[88%] h-[13rem] bg-center rounded-md"
                    style={{ backgroundImage: `url(${song ? song.img : ''})` }}
                ></div>

                <div className="w-full flex justify-between pt-2 pl-5 pr-2">
                    <span className="flex flex-col pt-1">
                        <p className="text-sm font-medium">{song ? song.name : ''}</p>
                        <p className="text-xs font-medium text-trans">{song ? song.artist : ''}</p>
                    </span>
                </div>

                <div className="flex justify-end w-full px-5 cursor-pointer">
                    <div className="flex">
                        <p className="text-xs text-trans mt-auto">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                    </div>
                </div>

                <div className="px-5 w-full">
                    <input
                        type="range"
                        ref={progressRef}
                        id="progress"
                        className="w-full bg-trans h-[0.30rem] cursor-pointer rounded-md"
                        defaultValue={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                    />
                    <div className="flex items-center justify-evenly pt-3">
                        <audio id="song" ref={songRef} autoPlay />
                        <span className="flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]">
                            <img src={Prev} alt="" />
                        </span>
                        <span
                            className="flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]"
                            onClick={playpause}
                        >
                            <img src={ctrlImgRef.current ? ctrlImgRef.current.src : Play} id="ctrlImg" ref={ctrlImgRef} alt="" />
                        </span>
                        <span className="flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]">
                            <img src={Next} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playercard;
