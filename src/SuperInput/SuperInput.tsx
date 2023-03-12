import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css';
import {SuperButton} from "../SuperButton/SuperButton";

type SuperInputPropsType = {
    titleValue: string
    callback: (value: string) => void
}

export const SuperInput = (props: SuperInputPropsType) => {

    let [value, setValue] = useState('0')
    const [error, setError] = useState('0')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
         setValue(e.currentTarget.value)
         props.callback(e.currentTarget.value)
        // res(e.currentTarget.value);

    }

    // const res = (value:string) => {
    //     // console.log(value)
    // }
    // console.log(value)
    // const onEnterInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         setValue(e.currentTarget.value)
    //         props.callback(value)
    //     }
    // }

    return (
        <div>
            <div className={s.inputMax}>
                <h5>{props.titleValue}
                    <input value={value} type={"number"} onChange={onChangeInputHandler} />
                </h5>
            </div>
        </div>
    );
};

