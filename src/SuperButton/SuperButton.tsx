import React from 'react';
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    callback: () => void
    titleButton: string
}
export const SuperButton = (props: SuperButtonPropsType) => {
     const onClickHandler = () => {
          props.callback()
     }
    return (
        <div>
            <div className={s.button}>
                <button onClick={onClickHandler}>{props.titleButton}</button>
                {/*<button disabled={props.startValue >= props.maxValue} onClick={onClickPlusHandler}>{props.titleButton}</button>*/}
                {/*<button disabled={props.startValue >= props.maxValue} onClick={onClickPlusHandler}>inc</button>*/}

            </div>

        </div>
    );
};

