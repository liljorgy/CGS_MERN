import React, {forwardRef, useImperativeHandle} from 'react';
import classes from './Cards.module.css'
import {TextInput} from 'grommet';


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
               <TextInput
                    name="salePriceLow"
                    id="salePriceLow"
                    placeholder="Sale Price - Low"
                    size="small"
                    />
               <TextInput
                   name="salePriceHigh"
                   id="salePriceHigh"
                   placeholder="Sale Price - High"
                   size="small"
                   />
               <TextInput
                    name="saleDateLow"
                    id="saleDateLow"
                    type="date"
                    placeholder="Sale Date - Low"
                    />
               <TextInput
                    name="saleDateHigh"
                    id="saleDateHigh"
                    type="date"
                    placeholder="Sale Date - High"
                    />
           </div>
    );
});

export default SalesCard;