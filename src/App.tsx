import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Customizer} from "./Сustomizer/Сustomizer";


function App() {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0);
    const [currentValue, setCurrentValue] = useState(0);

    const plusNumber = () => {
        setCurrentValue(setCurrentValue => setCurrentValue + 1);
    }
    const resetNumber = () => {
        setCurrentValue(startValue);
    }

    const currrentValue = (newStartValue: number) => {
        setCurrentValue(Number(newStartValue))
    }
    const startValueSet = (value: string) => {
        setStartValue(Number(value))

    }
    const maxValueSet = (value: string) => {
        setMaxValue(Number(value))
    }

    const setValueCustomizer = (newStartValue: string, newMaxValue: string) => {
        setStartValue(Number(newStartValue))
        setMaxValue(Number(newMaxValue))
        currrentValue(Number(newStartValue))
    }


    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <Customizer maxValueSet={maxValueSet}
                            startValueSet={startValueSet}
                            setValueCustomizer={setValueCustomizer}
                />
                <Counter plusNumber={plusNumber}
                         resetNumber={resetNumber}
                         maxValue={maxValue}
                         startValue={startValue}
                         currentValue={currentValue}

                />
            </div>


        </div>

    );
}

export default App;
