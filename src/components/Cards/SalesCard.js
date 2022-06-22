import React from 'react';
import classes from './Cards.module.css'


const SalesCard = () => {
    return (
           <div className={classes.card}>
               <h3>Sale Details</h3>
               $<input
                    className={classes.text_input__width}
                    placeholder="Sale Price - Low"/><br/>
               $<input
                    className={classes.text_input__width}
                    placeholder="Sale Price - High"/><br/>
               &nbsp;&nbsp;<input
                    className={classes.text_input__width}
                    type="date"
                    placeholder="Sale Date - Low"/><br/>
               &nbsp;&nbsp;<input
                    className={classes.text_input__width}
                    type="date"
                    placeholder="Sale Date - High"/><br/>
           </div>
    );
};

export default SalesCard;