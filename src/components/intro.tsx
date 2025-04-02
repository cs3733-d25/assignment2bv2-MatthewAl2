import React from 'react';

interface IntroProps {
    names: string[]; // Expecting an array of strings
}

const Intro: React.FC<IntroProps> = ({ names }) => {
    return (
        <div className="p-10">
            <img src="../assets/game.jpg" alt="gameee" width="1920"/>
            <h1 className="font-bold text-xl pb-4">
                {names[0]} and {names[1]}
            </h1>
        </div>
    );
};

export default Intro;