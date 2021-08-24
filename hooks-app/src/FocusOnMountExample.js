import { useRef, useState, useEffect } from "react";

const App = () => {
    // Store a reference to the input's DOM node
    const inputRef = useRef();

    // Store the input's value in state
    const [value, setValue] = useState("");

    useEffect(
        () => {
            // This runs AFTER the first render,
            // so the ref is set by now.
            console.log("render");
            // inputRef.current.focus();
        },

        // The effect "depends on" inputRef
        [inputRef]
    );

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
}

export default App;