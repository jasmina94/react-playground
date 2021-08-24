import { useEffect, useState } from "react"


const LifecycleDemo = () => {

    useEffect(() => {
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log('Render!');

        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return () => console.log('Unmountin...');
    })

    return "I'm Lifecycle demo";
}

const UltimateLifecycleDemoApp = () => {
    // Set up a piece of state, so that we have
    // a way to trigger a re-render.
    //const [random, setRandom] = useState(Math.random());

    // Set up another piece of state to keep track of
    // whether the LifecycleDemo is shown or hidden
    //const [mounted, setMounted] = useState(true);

    // This function will change the random number,
    // and trigger a re-render (in the console,
    // you'll see a "render!" from LifecycleDemo)
    //const reRender = () => setRandom(Math.random());

    // This function will unmount and re-mount the
    // LifecycleDemo, so you can see its cleanup function
    // being called.
    //const toggle = () => setMounted(!mounted);

    // return (
    //     <>
    //         <button onClick={reRender}>Re-render</button>
    //         <button onClick={toggle}>Show/Hide LifecycleDemo</button><br/>

    //         {mounted && <LifecycleDemo />}

    //     </>
    // );

    // ********************************************** //
    // Runs when page or dataPerPage change. 
    // If both change at the same time, runs only once.
    // ********************************************** //

    // const [page, setPage] = useState(1);
    // const [dataPerPage, setDataPerPage] = useState(3);

    // useEffect(() => {
    //     console.log('UseEffect triggers');
    // }, [page, dataPerPage]);

    // return (
    //     <>
    //         <button onClick={() => setPage(Math.random())}>Change page</button>
    //         <button onClick={() => setDataPerPage(Math.random())}>Change per page</button>
    //         <button onClick={() => { setPage(Math.random()); setDataPerPage(Math.random()) }}>Change both</button>
    //         <p>{page}</p>
    //         <p>{dataPerPage}</p>
    //     </>
    // );


    // ************************************************************************* //
    // Ako se ne prosledi [], useEffect ce trigerovati na svaku promenu stanja.
    // Ako se prosledi [], samo prvi put kada se komponenta postavlja.
    // ************************************************************************* //
    const [state, setState] = useState(1);

    useEffect(() => {
        console.log('Renders');
        return () => console.log('Unmounting...');
    })

    return (
        <>
            <p>Something stupid here</p>
            <p>{state}</p>
            <button onClick={() => setState(Math.random())}>Change number</button>
        </>
    )
}

export default UltimateLifecycleDemoApp;