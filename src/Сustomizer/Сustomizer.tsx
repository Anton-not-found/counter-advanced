import React, {useState} from 'react';
import s from './Customizer.module.css';
import {SuperInput} from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";

type CustomizerPropsType = {
    maxValueSet: (value: string) => void
    startValueSet: (value: string) => void
    setValueCustomizer: (newStartValue: string, newMaxValue: string) => void
}


export const Customizer = (props: CustomizerPropsType) => {
    const [startValue, setStartValueProps] = useState('');
    const [maxValue, setMaxValueProps] = useState('');

    const callbackMaxValueSet = (value: string) => {
        // props.maxValueSet(value)
        setMaxValueProps(value)

    }
    const callbackStartValueSet = (value: string) => {
        // props.startValueSet(value)
        setStartValueProps(value)

    }


    const callbackSuperButton = () => {
        props.setValueCustomizer(startValue, maxValue)
    }

    return (
        <div>
            <div className={s.input}>
                <SuperInput titleValue={'max value'} callback={callbackMaxValueSet}/>
                <SuperInput titleValue={'start value'} callback={callbackStartValueSet}/>
            </div>
            <div className={s.button}>
                <SuperButton callback={callbackSuperButton} titleButton={'SET'}/>
            </div>
        </div>
    );
};

