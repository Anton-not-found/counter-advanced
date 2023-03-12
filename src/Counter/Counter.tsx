import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "../SuperButton/SuperButton";


type CounterPropsType = {
    plusNumber: () => void
    resetNumber: () => void
    maxValue: number
    startValue: number
    currentValue: number
}
export const Counter = (props: CounterPropsType) => {

    const plusNumberHandler = () => {
        props.plusNumber()
    }

    const resetNumberHandler = () => {
        props.resetNumber()

    }

    const currrentValueHandler = () => {

    }

    let disableConditionIncr = props.currentValue === props.maxValue

    let disableConditionRes = props.currentValue === props.startValue

    return (
        <div className={s.allCounter}>
            <div className={props.currentValue >= props.maxValue ? s.numberError : s.number}>
                <h1>{props.currentValue}</h1>
            </div>
            <div className={s.button}>
                <SuperButton disableCondition={disableConditionIncr}
                             callback={plusNumberHandler}
                             titleButton={'incr'}
                />
                <SuperButton disableCondition={disableConditionRes}
                             callback={resetNumberHandler}
                             titleButton={'reset'}
                />
            </div>
        </div>
    );
};



