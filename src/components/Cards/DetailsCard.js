import React, {forwardRef, useImperativeHandle} from 'react';
import classes from './Cards.module.css';
import {TextInput} from 'grommet';

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
            <TextInput
                   id="utilities"
                   placeholder="Utilities"
                   size="small"/>
            <TextInput
                   id="highestAndBest"
                   placeholder="Highest and Best Use"
                   size="small"/>
            <TextInput
                   id="landAreaLow"
                   placeholder="Land Area - Low"
                   size="small" />
            <TextInput
                   id="landAreaHigh"
                   placeholder="Land Area - High"
                   size="small"/>
            <TextInput
                   id="unitPriceLow"
                   placeholder="Unit Price - Low"
                   size="small"/>
            <TextInput
                   id="unitPriceHigh"
                   placeholder="Unit Price - High"
                   size="small"/>
        </div>
    );
});

export default DetailsCard;