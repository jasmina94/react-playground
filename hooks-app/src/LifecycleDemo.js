import { useEffect, useRef, useState } from "react";


export function LifecycleDemo() {

    useEffect(() => {

        // Gets called after every render
        console.log('render!');

        // Gets called prior to unmounting
        // When something needs to be cleaned up, before component unmount
        return () => console.log('unmounting...');
    });


    return "I'm demo.";
};

export function DependingLifecycleDemo() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(undefined);

    // Refs use ref to access DOM nodes and set inital values
    const nameInputRef = useRef(null);
    const ageInputRef = useRef(null);

    // This effect will trigger only in case name in state is changed
    useEffect(() => {

        console.log('Value changed: ' + name);

        nameInputRef.current?.focus();

    }, [name]);


    const sumbitInputs = () => {
        setName(nameInputRef.current?.value);
        setAge(ageInputRef.current?.value);
    }


    // When we don't want to have handles on every input field
    // It becomes uncontroller component
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    return (
        <div>
            <p>Test depending effect...</p>
            <p>Name: <input type="text" ref={nameInputRef}/></p>
            <p>Age: <input type="number" ref={ageInputRef}/></p>
            <p><button onClick={sumbitInputs}>Submit</button></p>
        </div>
    )
};

export function AppLifecycleDemo() {
    //Piece of state that is changing
    const [random, setRandom] = useState(Math.random());

    //To keep track if LifecycleDemo is shown or hidden
    const [mounted, setMounted] = useState(true);

    //Change random number and trigger change of state and useEffect
    const reRender = () => setRandom(Math.random());

    //Mount and un-mount LifecycleDemo, see cleanup function beein called
    const toggle = () => setMounted(!mounted);

    return (
        <div>
            <div>
                <button onClick={reRender}>Re-render</button>
                <button onClick={toggle}>Show/Hide LifecycleDemo</button>
                {mounted && <LifecycleDemo />}
                {mounted && <DependingLifecycleDemo />}
            </div>

        </div>
    )
}