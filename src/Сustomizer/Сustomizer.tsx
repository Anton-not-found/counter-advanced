import React from 'react';
import s from './Customizer.module.css';
import {SuperInput} from "../SuperInput/SuperInput";

type СustomizerPropsType = {
    maxValueSet: (value: string) => void
    startValueSet: (value: string) => void
}
export const Customizer = (props: СustomizerPropsType) => {

    const callbackMaxValueSet = (value:string) => {
        props.maxValueSet(value)
    }
    const callbackStartValueSet = (value:string) => {
        props.startValueSet(value)
    }


    return (
        <div className={s.allCounter}>
            <SuperInput titleValue={'max value'} callback={callbackMaxValueSet}/>
            <SuperInput titleValue={'start value'} callback={callbackStartValueSet}/>

        </div>
    );
};

