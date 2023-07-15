import React from "react";
import Card from "./Card";
import Vars from "./vars";
const App = ()=>{
    return (
        <div>
        
        <Card 
            name="Hello"
            src="https://resizing.flixster.com/yWlJN4Z-Wmx3NUsxn3cM3NJrw10:/300x300/v2/https://flxt.tmsimg.com/assets/p24531823_v_v13_ac.jpg"
            liked="92% ❤"
            date="October 1, 2010"
        />
         

        {Vars.map((one)=>{
        return (
            <Card 
            name={one.name} 
            src={one.src}
            liked={one.liked}
            date={one.date}
            />
        )})}            
        
        </div>);
}


export default App;