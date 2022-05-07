import {useState} from 'react'


function DisplayButton(props) {
    const handleClick = () => props.onClickFunction(props.increment);

    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}


function DisplayMessage(props) {
    return (
        <div>{props.message}</div>
    )
}


export function Button() {
    const [counter, setCounter] = useState(0);
    const incementCounter = (incrementValue) => setCounter(counter+incrementValue);

    return (
        <div>
            <DisplayButton onClickFunction={incementCounter} increment={1}/>
            <DisplayButton onClickFunction={incementCounter} increment={5}/>
            <DisplayButton onClickFunction={incementCounter} increment={10}/>
            <DisplayButton onClickFunction={incementCounter} increment={100}/>
            <DisplayMessage message={counter}/>
        </div>
    );
}
