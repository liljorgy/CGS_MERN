import React, {useState} from 'react';
import classes from './ToggleSwitch.module.css';
import Switch from "react-switch";

const ToggleSwitch = (props) => {
    const [ isChecked, setIsChecked ] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked)
        props.switchQuery()
    }

    return (
        <div className={classes.inline_text}>
            {(!isChecked) && <div className={classes.selected}>Improved Property</div>}
            {(isChecked) && <div className={classes.not_selected}>Improved Property</div>}
            <label htmlFor="material-switch" className={classes.switch}>
                <Switch
                    checked={isChecked}
                    onChange={handleChange}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
            </label>
            {(isChecked) && <div className={classes.selected}>Land Sale</div>}
            {(!isChecked) && <div className={classes.not_selected}>Land Sale</div>}
        </div>
    );
};

export default ToggleSwitch;