import React from 'react';

const Table1 = () => {
    return (
        <table className="collapse">
            <caption>Favorite Games from Different Genres</caption>
            <tr>
                <th>RPG</th>
                <th>Puzzle</th>
                <th>Battle Royale</th>
            </tr>
            <tr>
                <td>Metaphor: Refantazio</td>
                <td>Tetris</td>
                <td>Fortnite</td>
            </tr>
            <tr>
                <td>Persona 5 Royal</td>
                <td>Flow Free</td>
                <td>Call of Duty: Warzone</td>
            </tr>
            <tr>
                <td>Fire Emblem: Three Houses</td>
                <td>Monument Valley</td>
                <td>Surviv.io</td>
            </tr>
        </table>
    );
};

export default Table1;