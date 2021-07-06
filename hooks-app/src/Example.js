import React, {useEffect, useState} from "react";

export function Example() {
    const [count, setCount] = useState(0);  //initial state is passed here, return value: current state and function that updates it
    
    // Component must do something after render, each render it gets called
    // Effect behaves like part of rendering
    useEffect(() => {
        document.title = `You clicked button ${count} times.`;
    });

    return(
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
