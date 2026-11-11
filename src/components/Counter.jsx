import React from "react";


export default function Counter({ count, setCount }) {
    return (
       <div className="counter-box">
        <h2>Counter Application</h2>
        <h1 className="count-value">{count}</h1>

        <div className="button-group">
            <button className="increment" onClick={() => setCount(count + 1)}> + Increment </button>
            <button className="decrement" onClick={() => setCount(count - 1)}> - Decrement </button>
            <button className="reset" onClick={() => setCount(0)}> Reset </button>
        </div>
        </div>
);
}

