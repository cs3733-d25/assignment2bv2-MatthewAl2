import React from 'react';

const Form = () => {
    return (

        <form>
            <link rel="stylesheet" href="public/mystyles.css"/>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/><br/>

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"/><br/>

            <p>Which types of games do you enjoy?</p>
            <input type="checkbox" id="RPG" name="gameType" value="RPG"/>
            <label htmlFor="RPG">RPG</label>
            <input type="checkbox" id="Puzzle" name="gameType" value="Puzzle"/>
            <label htmlFor="Puzzle">Puzzle</label>
            <input type="checkbox" id="Battle" name="gameType" value="Battle"/>
            <label htmlFor="Battle">Battle Royale</label><br/>

            <p>What platform do you play on?</p>
            <input type="radio" id="PS5" name="platform" value="PS5"/>
            <label htmlFor="PS5">PS5</label>
            <input type="radio" id="PC" name="platform" value="PC"/>
            <label htmlFor="PC">PC</label>
            <input type="radio" id="Xbox" name="platform" value="Xbox"/>
            <label htmlFor="Xbox">Xbox</label><br/>

            <label htmlFor="comments">Comments:</label><br/>
            <textarea id="comments" name="comments"></textarea><br/>

            <label htmlFor="experience">Experience Level:</label>
            <select id="experience" name="experience">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select><br/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;