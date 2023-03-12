import React from 'react';
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    callback: () => void
    titleButton: string
    disableCondition: boolean

}
export const SuperButton = (props: SuperButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }


    return (
        <div>
            <div className={s.button}>
                <button disabled={props.disableCondition} onClick={onClickHandler}>{props.titleButton}</button>
            </div>

        </div>
    );
};

