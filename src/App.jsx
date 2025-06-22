import { useState } from "react";
import "./index.scss";
import Feedback from "./Components/Feedback.jsx";
import Statistics from "./Components/Statistics.jsx";

export default (props) => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <Feedback good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
            <Statistics statistics={{ good, neutral, bad }} />
        </>
    );
};