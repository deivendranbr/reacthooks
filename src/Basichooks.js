import React, { useState, useEffect } from "react";

function Basichooks () {
    const [isClicked, clickFn] = useState(false);
    const count = useCounterValue(isClicked);
    

    const onButtonClick = () => {
        clickFn(!isClicked);
        // setCount(count + 1);
    }

    
    
    return (
        <div>
            <p>I am Basic Hooks</p>
            <p>Count : {count}</p>

            <button onClick={onButtonClick}>
                {isClicked ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

function useCounterValue(isClicked) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [isClicked])

    return count;
}

export default Basichooks;