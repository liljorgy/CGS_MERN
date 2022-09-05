import React, {forwardRef, useImperativeHandle} from 'react';
import classes from './Cards.module.css'


const SalesCard = forwardRef((props, ref) => {

    useImperativeHandle(ref, ()=> ({
        setSalesQueryParameters(event) {
            event.preventDefault();
            if (document.getElementById('salePriceLow').value) {
                props.onHandleQueryRequest({salePriceLow: document.getElementById('salePriceLow').value})
            }
            if (document.getElementById('salePriceHigh').value) {
                props.onHandleQueryRequest({salePriceHigh: document.getElementById('salePriceHigh').value})
            }
            if (document.getElementById('saleDateLow').value) {
                props.onHandleQueryRequest({saleDateLow: document.getElementById('saleDateLow').value})
            }
            if (document.getElementById('saleDateHigh').value) {
                props.onHandleQueryRequest({saleDateHigh: document.getElementById('saleDateHigh').value})
            }
        }
    }));

    return (
           <div className={classes.card}>
               <h3>Sale Details</h3>
               $<input
                    name="salePriceLow"
                    id="salePriceLow"
                    className={classes.text_input__width}
                    placeholder="Sale Price - Low"/><br/>
               $<input
                    name="salePriceHigh"
                    id="salePriceHigh"
                    className={classes.text_input__width}
                    placeholder="Sale Price - High"/><br/>
               &nbsp;&nbsp;<input
                    name="saleDateLow"
                    id="saleDateLow"
                    className={classes.text_input__width}
                    type="date"
                    placeholder="Sale Date - Low"/><br/>
               &nbsp;&nbsp;<input
                    name="saleDateHigh"
                    id="saleDateHigh"
                    className={classes.text_input__width}
                    type="date"
                    placeholder="Sale Date - High"/><br/>
           </div>
    );
});

export default SalesCard;