import React, {useState} from 'react';
import s from './Customizer.module.css';
import {SuperInput} from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";

type CustomizerPropsType = {
    maxValueSet: (value: number) => void
    startValueSet: (value: number) => void
    setValueCustomizer: (newStartValue: number, newMaxValue: number) => void
}


export const Customizer = (props: CustomizerPropsType) => {
    const [newStartValue, setStartValueProps] = useState(0);
    const [newMaxValue, setMaxValueProps] = useState(0);
    const [errorMax, setErrorMax] = useState(0)
    const [errorStart, setErrorStart] = useState(0)
    let disableCondition = newStartValue >= newMaxValue

    const callbackMaxValueSet = (value: number) => {
        setMaxValueProps(value)
        setErrorMax(value)
    }
    const callbackStartValueSet = (value: number) => {
        setStartValueProps(value)
        setErrorStart(value)
    }

    const callbackSuperButton = () => {
        props.setValueCustomizer(newStartValue, newMaxValue)
    }

    console.log(errorMax)
    console.log(errorStart)

    const errorInput = (errorMax:number, errorStart:number) => {

    }


    return (
        <div className={s.allCustomizer}>
            <div className={errorMax <= errorStart ? s.inputError : s.input}>
                <SuperInput titleValue={'max value'} callback={callbackMaxValueSet}/>
                <SuperInput titleValue={'start value'} callback={callbackStartValueSet}/>
            </div>
            <div className={s.button}>
                <SuperButton disableCondition={disableCondition} callback={callbackSuperButton} titleButton={'SET'}/>
            </div>
        </div>
    );
};

