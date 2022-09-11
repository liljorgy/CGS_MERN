import React, {forwardRef, useImperativeHandle} from 'react';
import classes from './Cards.module.css';
import {TextInput} from 'grommet';

const StructureCard = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        setStructureQueryParameters(event) {
            event.preventDefault();
            if (document.getElementById('structureType').value) {
                props.onHandleQueryRequest({structureType: document.getElementById('structureType').value})
            }
            if (document.getElementById('sizeLow').value) {
                props.onHandleQueryRequest({sizeLow: document.getElementById('sizeLow').value})
            }
            if (document.getElementById('sizeHigh').value) {
                props.onHandleQueryRequest({sizeHigh: document.getElementById('sizeHigh').value})
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
            <h3>Structure Details</h3>
            <TextInput
                size="small"
                name="structureType"
                id="structureType"
                placeholder="Structure Type"/>
            <TextInput
                size="small"
                name="sizeLow"
                id="sizeLow"
                placeholder="Size - Low" />
            <TextInput
                size="small"
                name="sizeHigh"
                id="sizeHigh"
                placeholder="Size - High" />
            <TextInput
                size="small"
                name="unitPriceLow"
                id="unitPriceLow"
                placeholder="Price per Unit - Low" />
            <TextInput
                size="small"
                name="unitPriceHigh"
                id="unitPriceHigh"
                placeholder="Price per Unit - High" />
        </div>
    );
});

export default StructureCard;