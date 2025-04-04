import React from 'react';
import logo from '../assets/game.jpg'

interface IntroProps {
    names: string[]; // Expecting an array of strings
}

const Intro: React.FC<IntroProps> = ({ names }) => {
    return (
        <div className="p-10">
            <img className="fit" src={logo} alt="gameee" width="1920"/>
            <h1 className="font-bold text-xl pb-4">
                {names[0]} and {names[1]}
            </h1>
        </div>
    );
};

export default Intro;