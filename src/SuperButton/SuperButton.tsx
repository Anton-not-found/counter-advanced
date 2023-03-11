import React from 'react';
import s from "./SuperButton.module.css";
type SuperButtonPropsType = {
    numberDefault: number
    plusNumber: () => void
    resetNumber: () => void
    maxValue: number
    startValue:number
}
export const SuperButton = (props:SuperButtonPropsType) => {

    const onClickPlusHandler = () => {
        props.plusNumber()
    }
    const onClickResetHandler = () => {
        props.resetNumber()
    }


    return (
        <div>
            <div className={s.button}>
            <button disabled={props.numberDefault >= props.maxValue} onClick={onClickPlusHandler}>inc</button>
            <button disabled={props.numberDefault === props.startValue} onClick={onClickResetHandler}>reset</button>
            </div>

        </div>
    );
};

