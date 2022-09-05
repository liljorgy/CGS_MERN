import React, {forwardRef, useImperativeHandle} from 'react';
import classes from './Cards.module.css';

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
            &nbsp;&nbsp;<input
                name="structureType"
                id="structureType"
                className={classes.text_input__width}
                placeholder="Structure Type"/> <br/>
            &nbsp;&nbsp;<input
                name="sizeLow"
                id="sizeLow"
                className={classes.text_input__width}
                placeholder="Size - Low" /> <br/>
            &nbsp;&nbsp;<input
                name="sizeHigh"
                id="sizeHigh"
                className={classes.text_input__width}
                placeholder="Size - High" /> <br/>
            $<input
                name="unitPriceLow"
                id="unitPriceLow"
                className={classes.text_input__width}
                placeholder="Price per Unit - Low" /> <br/>
            $<input
                name="unitPriceHigh"
                id="unitPriceHigh"
                className={classes.text_input__width}
                placeholder="Price per Unit - High" /> <br/>
        </div>
    );
});

export default StructureCard;