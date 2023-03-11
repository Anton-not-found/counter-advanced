import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css';
import {SuperButton} from "../SuperButton/SuperButton";

type SuperInputPropsType = {
    titleValue: string
    callback: (value: string) => void
}

export const SuperInput = (props: SuperInputPropsType) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }

    const onEnterInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setValue(e.currentTarget.value)
            props.callback(value)
        }
    }

    return (
        <div>
            <div className={s.inputMax}>
                <h5>{props.titleValue}
                    <input type={"number"} onChange={onChangeInputHandler} onKeyDown={onEnterInputHandler} />
                </h5>
            </div>
            <div className={s.button}>
                {/*<SuperButton numberDefault={} plusNumber={} resetNumber={} maxValue={} startValue={}/>*/}
            </div>
        </div>
    );
};

