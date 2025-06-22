export default ({good, neutral, bad, setGood, setNeutral, setBad}) => {

    return (
        <>
            <section className="wrapper--section">
                <h2 className="wrapper__title">Please, leave feedback</h2>
                <ul className="wrapper__list">
                    <li className="wrapper__list-item">
                        <button
                            className="wrapper__item-button"
                            value={good}
                            onClick={(e) => {
                                setGood(good + 1);
                            }}
                        >
                            Good
                        </button>
                    </li>
                    <li className="wrapper__list-item">
                        <button
                            className="wrapper__item-button"
                            value={neutral}
                            onClick={(e) => {
                                setNeutral(neutral + 1);
                            }}
                        >
                            Neutral
                        </button>
                    </li>
                    <li className="wrapper__list-item">
                        <button
                            className="wrapper__item-button"
                            value={bad}
                            onClick={(e) => {
                                setBad(bad + 1);
                            }}
                        >
                            Bad
                        </button>
                    </li>
                </ul>
            </section>
        </>
    );
};