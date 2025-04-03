import React from 'react';

const Table2 = () => {
    return (
        <table className="collapse">
            <caption>Ranking my favorite Wii games</caption>
            <tr>
                <th>Game</th>
                <th>Ranking</th>
                <th>Favorite character</th>
            </tr>
            <tr>
                <td>Mario Kart Wii</td>
                <td>1</td>
                <td>Funky Kong</td>
            </tr>
            <tr>
                <td>Super Smash Bros. Brawl</td>
                <td>2</td>
                <td>Donkey Kong</td>
            </tr>
            <tr>
                <td>Wii Party</td>
                <td>3</td>
                <td>Mii</td>
            </tr>
            <tr>
                <td>Wii Sports Resort</td>
                <td>4</td>
                <td>Mii</td>
            </tr>
            <tr>
                <td>Mario Party</td>
                <td>5</td>
                <td>Koopa Troopa</td>
            </tr>
        </table>
    );
};

export default Table2;