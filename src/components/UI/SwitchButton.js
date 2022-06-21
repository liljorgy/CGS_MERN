import React from 'react';
import classes from './Switch.module.css';

const SwitchButton = (props) => {

    return (
        <div className={classes.inline_text}>
            <div className={classes.query_text}>Improved Property</div>
            <input
                className={classes.react_switch_checkbox}
                onClick={props.switchQuery}
                input="checkbox"
                id={`react-switch-new`}
            />
            <label
                className={classes.react_switch_label}
                htmlFor={`react-switch-new`}
                >
                <span className={classes.react_switch_button}/>
            </label>
            <div className={classes.query_text}>Land Sale</div>
        </div>
    );
};

export default SwitchButton;