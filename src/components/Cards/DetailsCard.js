import React, {forwardRef, useImperativeHandle} from 'react';
import classes from './Cards.module.css';

const DetailsCard = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        setDetailsQueryParameters(event) {
            event.preventDefault();
            if (document.getElementById('utilities').value) {
                props.onHandleQueryRequest({utilities: document.getElementById('utilities').value})
            }
            if (document.getElementById('highestAndBest').value) {
                props.onHandleQueryRequest({highestAndBest: document.getElementById('highestAndBest').value})
            }
            if (document.getElementById('landAreaLow').value) {
                props.onHandleQueryRequest({landAreaLow: document.getElementById('landAreaLow').value})
            }
            if (document.getElementById('landAreaHigh').value) {
                props.onHandleQueryRequest({landAreaHigh: document.getElementById('landAreaHigh').value})
            }
            if (document.getElementById('unitPriceLow').value) {
                props.onHandleQueryRequest({unitPriceLow: document.getElementById('unitPriceLow').value})
            }
            if (document.getElementById('unitPriceHigh').value) {
                props.onHandleQueryRequest({unitPriceHigh: document.getElementById('unitPriceHigh').value})
            }
        }
    }))

    return (
        <div className={classes.card}>
            <h3>Property Details</h3>
            <input name="utilities"
                   id="utilities"
                    placeholder="Utilities"
                    className={classes.text_input__width}/><br/>
            <input name="highestAndBest"
                   id="highestAndBest"
                   placeholder="Highest and Best Use"
                   className={classes.text_input__width}/><br/>
            <input name="landAreaLow"
                   id="landAreaLow"
                   placeholder="Land Area - Low"
                   className={classes.text_input__width}/><br/>
            <input name="landAreaHigh"
                   id="landAreaHigh"
                   placeholder="Land Area - High"
                   className={classes.text_input__width}/><br/>
            <input name="unitPriceLow"
                   id="unitPriceLow"
                   placeholder="Unit Price - Low"
                   className={classes.text_input__width}/><br/>
            <input name="unitPriceHigh"
                   id="unitPriceHigh"
                   placeholder="Unit Price - High"
                   className={classes.text_input__width}/><br/>
        </div>
    );
});

export default DetailsCard;