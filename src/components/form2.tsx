import React from 'react';

const Form2 = () => {
    return (
        <form>
            <label htmlFor="fullName">Enter your full name:</label>
            <input type="text" id="fullName"/>
            <br/>
            <br/>
            <label htmlFor="favoriteGame">Favorite game:</label>
            <input type="text" id="favoriteGame"/>
            <br/>
            <p>What games have you played?</p>
            <input type="checkbox" id="League of Legends"/>
            <label htmlFor="League of Legends">League of Legends</label>
            <br/>
            <input type="checkbox" id="Marvel Rivals"/>
            <label htmlFor="Marvel Rivals">Marvel Rivals</label>
            <br/>
            <input type="checkbox" id="Valorant"/>
            <label htmlFor="Valorant">Valorant</label>
            <br/>
            <input type="checkbox" id="Overwatch"/>
            <label htmlFor="Overwatch">Overwatch</label>
            <br/>
            <input type="checkbox" id="Brawl Stars"/>
            <label htmlFor="Brawl Stars">Brawl Stars</label>
            <br/>
            <br/>

            <p>What is your favorite Wii game?</p>
            <input type="radio" id="Mario Kart Wii" name="favoriteGame"/>
            <label htmlFor="Mario Kart Wii">Mario Kart Wii</label>
            <br/>
            <input type="radio" id="Wii Party" name="favoriteGame"/>
            <label htmlFor="Wii Party">Wii Party</label>
            <br/>
            <input type="radio" id="Super Smash Bros. Brawl" name="favoriteGame"/>
            <label htmlFor="Super Smash Bros. Brawl">Super Smash Bros. Brawl</label>
            <br/>
            <input type="radio" id="Mario Party" name="favoriteGame"/>
            <label htmlFor="Mario Party">Mario Party</label>
            <br/>
            <input type="radio" id="Wii Sports Resort" name="favoriteGame"/>
            <label htmlFor="Wii Sports Resort">Wii Sports Resort</label>
            <br/>
            <br/>
            <label htmlFor="console">Favorite console:</label>

            <select name="console" id="console">
                <option value="None">None</option>
                <option value="Wii">Wii</option>
                <option value="Wii U">Wii U</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Xbox">Xbox</option>
                <option value="PlayStation">PlayStation</option>
            </select>
            <br/>
            <br/>
            <label htmlFor="comments">Comments</label>
            <br/>
            <textarea rows="2" cols="50" id="comments"></textarea>
            <br/>
            <br/>
            <button type="submit">Submit</button>
            <link rel="stylesheet" href="public/mystyles.css"/>
        </form>

    );
};

export default Form2;