import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "../SuperButton/SuperButton";


type CounterPropsType = {
    plusNumber: () => void
    resetNumber: () => void
    maxValue: number
    startValue: number
    currentValue:number
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

    return (
        <div className={s.allCounter}>
            <div className={props.currentValue >= props.maxValue ? s.numberError : s.number}>
                <h1>{props.currentValue}</h1>
            </div>
            <div className={s.button}>
                <SuperButton callback={plusNumberHandler}
                             // maxValue={props.maxValue}
                             // startValue={props.startValue}
                             titleButton={'incr'}
                />
                <SuperButton callback={resetNumberHandler}
                             // maxValue={props.maxValue}
                             // startValue={props.startValue}
                             titleButton={'reset'}
                />
            </div>
        </div>
    );
};



