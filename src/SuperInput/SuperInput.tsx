import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css';
import {SuperButton} from "../SuperButton/SuperButton";

type SuperInputPropsType = {
    titleValue: string
    callback: (value: number) => void
}

export const SuperInput = (props: SuperInputPropsType) => {

    let [value, setValue] = useState(0)


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.currentTarget.value)
        setValue(newValue)
        props.callback(newValue)
        // res(e.currentTarget.value);
    //     if (newValue < 0) {
    // setError('ERROR')
    //     }
    }
    // const onBlurHandler = () => {
    //     console.log('onBlur')
    // }
    // const onFocusHandler = () => {
    //     props.callback(value)
    // }

    return (
        <div>
            <div className={s.inputMax}>
                <h5>{props.titleValue}
                    <input value={value}
                           type={"number"}
                           onChange={onChangeInputHandler}
                        // onBlur={onBlurHandler}
                        //    onFocus={onFocusHandler}
                    />
                </h5>
            </div>
        </div>
    );
};

