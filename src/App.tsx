import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Customizer} from "./Сustomizer/Сustomizer";


function App() {
    let startValue = 0;
    const [maxValue,setMaxValue] = useState(5)
    const [numberDefault, setNumberDefault] = useState(startValue);
    const plusNumber = () => {
        setNumberDefault(numberDefault => numberDefault + 1);
    }
    const resetNumber = () => {
        setNumberDefault(startValue);
    }

    const startValueSet = (value: string) => {
        setNumberDefault(Number(value))
        startValue = Number(value)

    }
    const maxValueSet = (value: string) => {
        setMaxValue( Number(value))
    }


    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <Customizer maxValueSet={maxValueSet}
                            startValueSet={startValueSet}
                />
                <Counter numberDefault={numberDefault}
                         plusNumber={plusNumber}
                         resetNumber={resetNumber}
                         maxValue={maxValue}
                         startValue={startValue}
                />
            </div>


        </div>

    );
}

export default App;
