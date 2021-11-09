import React from 'react';
import useSound from 'use-sound';
import boopSfx from './sound.mp3';
import logo from './Jukebox.png';


const Player = () => {
    const [play] = useSound(boopSfx);
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" onClick={play} style={{"pointer-events": "all"}}/>  
        </div>
      );
};

export default Player;