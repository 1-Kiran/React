import React, { useState } from "react";
import "./App.css"
import Section1 from "./UI(Tailwind)/Section1";

function App() {
    const [count, setCount] = useState(0);
    
    return ( 
        // <div className="container">
        //     <h1> { count } </h1>
        //     <button onClick = {() => setCount(count + 1) } > Increase </button>
        //     <button onClick = {() => setCount(count - 1) } > Decrease </button>
        //     <button onClick = {() => setCount(count-count)}> Reset </button>
        // </div>
        <Section1 />
    );
}

export default App;