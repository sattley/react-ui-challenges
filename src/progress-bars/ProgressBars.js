import { useState, useEffect } from "react";

const Bar = (props) => {
    // needs to have ability to handle it's own state in regards to animate
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    },[animate]);

    return (
        <div class="bar">
            <div class={`inner-bar ${animate ? "animate" : ""}`}></div>
        </div>
    )
}

const ProgressBars = () => {
    const [bars, setBars] = useState([]);
    return (
        <>
            <h1>Progress Bars</h1>
            <button class="add-btn" onClick={(event) => {
                setBars([...bars,{}])
            }}>Add Bar</button>
            {bars.map((bar, index) => {
                return (
                    <Bar/>
                )
            })}
        </>
    )
}

export default ProgressBars
