import React from 'react';
import classes from './Cards.module.css';

const StructureCard = () => {
    return (
        <div className={classes.card}>
            <h3>Structure Details</h3>
            &nbsp;&nbsp;<input placeholder="Structure Type"/> <br/>
            &nbsp;&nbsp;<input placeholder="Size - Low" /> <br/>
            &nbsp;&nbsp;<input placeholder="Size - High" /> <br/>
            $<input placeholder="Price per Unit - Low" /> <br/>
            $<input placeholder="Price per Unit - High" /> <br/>
        </div>
    );
};

export default StructureCard;