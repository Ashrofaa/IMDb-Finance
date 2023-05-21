import React from 'react';
import ListItem from './ListItem';
import database from "../database.json";
import img from "./arrow.png";


export default function App({setIDS, setCanvasVisibility, canvasVisible}) {
    
    // Exporting the keys & values from the IMDb dataset object
    const movieNames = Object.keys(database);
    const movieIDS = Object.values(database);


    const [letters, setLetters] = React.useState("");       // Using a state to store the search box user entry


    // A function used to store the changes mad in the search box in the "letters" state
    function handleChange(event) {
        var newLetter = event.target.value;
        setLetters(newLetter);
    };


    // A function determines the actions to be made once the drop down menu is clicked
    // 1. The "div" containing the options is shown
    // 2. The "arrow" img is inverted by 180deg
    // 3. The "if condition" is added so that if the dropdown is clicked without having a viable option selected, the canvas will still not show
    function handleClick() {
        document.getElementById("options").classList.toggle("hidden");
        document.getElementById("arrow").classList.toggle("arrow-inverted");
        if (movieNames.includes(letters)){
            setCanvasVisibility(prevState => !prevState)
        };
    };

    return (
        <div id='listContainer'>
            {/* The following is the "div" that has the select dropdown with its arrow */}
            <div id='selectContainer' onClick={handleClick}>
                <input type="radio" id="select" onClick={handleClick}/>
                <label htmlFor="select" className='movieTitle'>{letters==="" ? "Select a movie" : letters}</label>
                <img src={img} alt='arrow-img' id='arrow' className=''></img>
            </div>
            
            {/* The following is the "div" that has the movie names as the viable options */}
            <div id='options' className='hidden'>
                <input type="text" id="search" placeholder="Type to search..." onChange={handleChange} value={letters} />
                <form>

                    {/* The following maps over the data extracted earlier from the dataset object to generate the viable options */}
                    {/* The viable options are generated through the "Listitem" component */}
                    {movieNames.map((name, index) => <ListItem 
                    canvasVisible={canvasVisible}
                    setCanvasVisibility={setCanvasVisibility}
                    setIDS={setIDS}
                    movieIDS={movieIDS}
                    movieNames={movieNames} 
                    setLetters={setLetters} 
                    letters={letters} 
                    key={index} 
                    name={name} 
                    index={index} />)}
                </form>
            </div>
        </div>
    );
};
