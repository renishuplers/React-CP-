import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import taskList from "../tasklist";

// Create function to call all the array value in the taskList.js file
function createNote(note){
    return <Note 
        namejsx={note.namejs}
        durationjsx={note.durationjs} 
        briefjsx={note.briefjs} 
    />
}


function App(){


    return (
        <>
            <Header />

            {/* Recieving Date using map method in react */}
            {taskList.map(createNote)}

            {/* manualy add data using array id.property name */}
            {/* <Note 
                name={taskList[0].name}
                duration={taskList[0].duration} 
                brief={taskList[0].brief} 
            />
            <Note
                name={taskList[1].name}
                duration={taskList[1].duration} 
                brief={taskList[1].brief} 
            />
            <Note
                name={taskList[2].name}
                duration={taskList[2].duration} 
                brief={taskList[2].brief} 
            />
            <Note
                name={taskList[3].name}
                duration={taskList[3].duration} 
                brief={taskList[3].brief} 
            /> */}
            <Footer />
        </>
    );
}

export default App;