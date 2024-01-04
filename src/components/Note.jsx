import React from "react";


function Note(props){

    return (
        <div className="note">
            <h1>{props.namejsx}</h1>
            <h3>{props.durationjsx}</h3>
            <p>{props.briefjsx}</p>
        </div>
    )
};

export default Note;