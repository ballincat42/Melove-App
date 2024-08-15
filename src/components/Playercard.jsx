import React, { useRef, useEffect, useState } from 'react';
import LikeTheMoviesG from './assets/pics/LikeTheMovies.svg';
import PasilyoG from './assets/pics/Pasilyo.svg';
import Pasilyo3 from './assets/mp3s/Pasilyo.mp3';
import Love from './assets/icons/Love.svg';
import Dots from './assets/icons/3dots.svg';
import Volume from './assets/icons/Volume.svg';
import Prev from './assets/icons/Prev.svg';
import Play from './assets/icons/Play.svg';
import Next from './assets/icons/Next.svg';
import Pause from './assets/icons/Pause.svg';
import './PlayerCard.css';

function Playercard() {
    const songRef = useRef(null);
    const ctrlImgRef = useRef(null);
    const progressRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const song = songRef.current;

        if (song) {
            const updateProgress = () => {
                setCurrentTime(song.currentTime);
                setDuration(song.duration);
                progressRef.current.value = song.currentTime;
            };

            song.addEventListener('loadedmetadata', updateProgress);
            song.addEventListener('timeupdate', updateProgress);

            return () => {
                song.removeEventListener('loadedmetadata', updateProgress);
                song.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, []);

    const playpause = () => {
        const song = songRef.current;
        const ctrlImg = ctrlImgRef.current;

        if (isPlaying) {
            song.pause();
            ctrlImg.src = Play;
        } else {
            song.play();
            ctrlImg.src = Pause;
        }

        setIsPlaying(!isPlaying);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const handleProgressChange = (e) => {
        const song = songRef.current;
        song.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    return (
        <div className="w-[20rem] h-[25rem] bg-primary rounded-md px-3">
            <div className="flex flex-col mx-auto w-full pt-5 items-center h-full">
                <div
                    className="bg-cover w-[88%] h-[12rem] bg-center rounded-md"
                    style={{ backgroundImage: `url(${PasilyoG})` }}
                ></div>

                <div className="w-full flex justify-between pt-2 pl-5 pr-2">
                    <span className="flex flex-col pt-1">
                        <p className="text-sm">Pasilyo</p>
                        <p className="text-xs text-trans">Sunkissed Lola</p>
                    </span>
                    <span className="flex">
                        <span className="cursor-pointer w-[2rem] h-[2rem] hover:bg-hover rounded-full flex justify-center items-center">
                            <img src={Love} alt="" />
                        </span>
                        <span className="cursor-pointer w-[2rem] h-[2rem] hover:bg-hover rounded-full flex justify-center items-center">
                            <img src={Dots} className="h-[1rem]" alt="" />
                        </span>
                    </span>
                </div>

                <div className="flex justify-between w-full px-5 mt-2 cursor-pointer">
                    <span className="flex justify-center items-center w-[1.2rem]">
                        <img src={Volume} alt="" />
                    </span>
                    <div className="flex">
                        <p className="text-xs text-trans mt-auto">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                    </div>
                </div>

                <div className="px-5 w-full pt-3">
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
                        <audio id="song" ref={songRef}>
                            <source
                                src={Pasilyo3}
                                type="audio/mpeg"
                            />
                        </audio>

                        <span className="flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]">
                            <img src={Prev} alt="" />
                        </span>
                        <span
                            className="flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]"
                            onClick={playpause}
                            id="ctrl"
                        >
                            <img src={Play} id="ctrlImg" ref={ctrlImgRef} alt="" />
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
