import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "../SuperButton/SuperButton";


type CounterPropsType = {
    plusNumber: () => void
    resetNumber: () => void
    numberDefault: number
    maxValue: number
    startValue:number
}
export const Counter = (props: CounterPropsType) => {



    return (
        <div className={s.allCounter}>
            <div className={props.numberDefault >= props.maxValue ? s.numberError : s.number}>
                <h1>{props.numberDefault}</h1>
            </div>
            <SuperButton numberDefault={props.numberDefault}
                         plusNumber={props.plusNumber}
                         resetNumber={props.resetNumber}
                         maxValue={props.maxValue}
                         startValue={props.startValue}
            />
        </div>
    );
};



