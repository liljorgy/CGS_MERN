import React from 'react';
import classes from './Cards.module.css';

const DetailsCard = () => {
    return (
        <div className={classes.card}>
            <h3>Property Details</h3>
            <input placeholder="Utilities"
                   className={classes.text_input__width}/><br/>
            <input placeholder="Highest and Best Use"
                   className={classes.text_input__width}/><br/>
            <input placeholder="Land Area - Low"
                   className={classes.text_input__width}/><br/>
            <input placeholder="Land Area - High"
                   className={classes.text_input__width}/><br/>
            <input placeholder="Unit Price - Low"
                   className={classes.text_input__width}/><br/>
            <input placeholder="Unit Price - High"
                   className={classes.text_input__width}/><br/>
        </div>
    );
};

export default DetailsCard;