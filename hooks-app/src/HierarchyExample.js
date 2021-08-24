import { useEffect, useState } from "react";

// ************************************************************************* //
// The parent is not “done” until all of its children have rendered, 
// and the useEffect will only run after the render of a component is complete.
// ************************************************************************* //
const Top = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Top rendered');
    });

    return (
        <div>
            <div onClick={() => setCount(count + 1)}>Top level {count}</div>
            <Middle/>
        </div>
    )
}

const Middle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Middle rendered');
    });

    return (
        <div>
            <div onClick={() => setCount(count + 1)}>Middle level {count}</div>
            <Bottom/>
        </div>
    )
}

const Bottom = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Bottom rendered');
    });

    return (
        <div>
            <div onClick={() => setCount(count + 1)}>Bottom level {count}</div>
        </div>
    )
}

export default Top;