import React from 'react';


export default function ListItem(props) {
    
    // The following function defines the actions that should happen upon clicking on an option
    // 1. Giving that each option has an ID that is the same as its index in the dataset object, the "letters" state is set to that option
    // 2. Upon choosing the option, the options div is hidden and the arrow is re-inverted
    // 3. Setting the ID state to the corresponding option's ID from the ID array extracted from the dataset object
    // 4. Showing the canvas
    function handleClick(event) {
        props.setLetters((props.movieNames)[event.target.id]);
        document.getElementById("options").classList.toggle("hidden");
        document.getElementById("arrow").classList.toggle("arrow-inverted");
        props.setIDS((props.movieIDS)[event.target.id]);
        if (props.canvasVisible === false) {
            props.setCanvasVisibility(true);
        };
    };

    return (
        <div>
            {/* The condition added before the elements are added to filter according to the search box entry */}
            {(props.name).toLowerCase().startsWith((props.letters).toLowerCase()) && <input name="movie-name" className="movie-name" type="radio" id={props.index} onClick={handleClick} />}
            {(props.name).toLowerCase().startsWith((props.letters).toLowerCase()) && <label htmlFor={props.index}>{props.name}</label>}
        </div>
    );
};
