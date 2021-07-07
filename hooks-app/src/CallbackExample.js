import { useCallback, useState } from "react";

const functionCounter = new Set();

export function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = useCallback(() => { setCount1(count1 + 1) }, [count1]);
    const decrement1 = useCallback(() => { setCount1(count1 - 1) }, [count1]);
    const increment2 = useCallback(() => { setCount2(count2 + 1) }, [count2]);
    const decrement2 = useCallback(() => { setCount2(count2 - 1) }, [count2]);

    functionCounter.add(increment1);
    functionCounter.add(decrement1);
    functionCounter.add(increment2);
    functionCounter.add(decrement2);

    console.log(functionCounter.size);

    return (
        <>
           Count one: {count1}
           <button onClick={increment1}>+</button>
           <button onClick={decrement1}>-</button>
           <br/>
           Count two: {count2}
           <button onClick={increment2}>Increment count 2</button>
           <button onClick={decrement2}>Decrement count 2</button>
        </>
    )
}