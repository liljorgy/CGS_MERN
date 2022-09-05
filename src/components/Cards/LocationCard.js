import React, {useState, forwardRef, useImperativeHandle} from 'react';
import indianaCounties from "./Counties/indianaCounties";
import kentuckyCounties from "./Counties/kentuckyCounties";
import marylandCounties from "./Counties/marylandCounties";
import michiganCounties from "./Counties/michiganCounties";
import ohioCounties from "./Counties/ohioCounties";
import pennsylvaniaCounties from "./Counties/pennsylvaniaCounties";
import southCarolinaCounties from "./Counties/southCarolinaCounties";
import texasCounties from "./Counties/texasCounties";
import westVirginiaCounties from "./Counties/westVirginiaCounties";
import classes from './Cards.module.css';
import {Multiselect} from "multiselect-react-dropdown";

const LocationCard = forwardRef((props, ref) => {
    const [countyOptions, setCountyOptions] = useState([]);
    const [stateSelected, setStateSelected] = useState();
    const [countiesSelected, setCountiesSelected] = useState([]);

    const addCounty = (county) => {
        for (var x in county) {
            if (!countiesSelected.includes(county[x].name)) {
                setCountiesSelected([...countiesSelected, county[x].name])
            }
        }
    };
    const removeCounty = (county) => {
        countiesSelected.length = 0;
        for (var x in county) {
            setCountiesSelected([...countiesSelected, county[x].name])
        }
    };

    useImperativeHandle(ref, () => ({
        setQueryParameters(event) {
            event.preventDefault();
            if (stateSelected) {
                props.onHandleQueryRequest({state: stateSelected});
            }
            if (countiesSelected) {
                props.onHandleQueryRequest({counties: countiesSelected});
            }
            if (document.getElementById('inputCity').value)  {
                props.onHandleQueryRequest({city: document.getElementById('inputCity').value})
            }
            if (document.getElementById('inputStreet').value) {
                props.onHandleQueryRequest({street: document.getElementById('inputStreet').value})
            }
        }
    }));

    const stateCountyLink = (selectedState) => {
        if (selectedState.target.value === '') {
            setCountyOptions([]);
        }
        else if (selectedState.target.value === 'Indiana') {
            setCountyOptions(indianaCounties)
            setStateSelected('Indiana')
        }
        else if (selectedState.target.value === 'Kentucky') {
            setCountyOptions(kentuckyCounties)
            setStateSelected('Kentucky')
        }
        else if (selectedState.target.value === 'Maryland') {
            setCountyOptions(marylandCounties)
            setStateSelected('Maryland')
        }
        else if (selectedState.target.value === 'Michigan') {
            setCountyOptions(michiganCounties)
            setStateSelected('Michigan')
        }
        else if (selectedState.target.value === 'Ohio') {
            setCountyOptions(ohioCounties)
            setStateSelected('Ohio')
        }
        else if (selectedState.target.value === 'Pennsylvania') {
            setCountyOptions(pennsylvaniaCounties)
            setStateSelected('Pennsylvania')
        }
        else if (selectedState.target.value === 'South Carolina') {
            setCountyOptions(southCarolinaCounties)
            setStateSelected('South Carolina')
        }
        else if (selectedState.target.value === 'Texas') {
            setCountyOptions(texasCounties)
            setStateSelected('Texas')
        }
        else if (selectedState.target.value === 'West Virginia') {
            setCountyOptions(westVirginiaCounties)
            setStateSelected('West Virginia')
        };
    };

    return (
        <div className={classes.card}>
            <h3>Location Details</h3>
            <select className={classes.searchPanes_dropdown} onChange={stateCountyLink}>
                <option value="">--Select State--</option>
                <option value="Ohio">Ohio</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Indiana">Indiana</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Maryland">Maryland</option>
                <option value="Michigan">Michigan</option>
                <option value="South Carolina">South Carolina</option>
                <option value="Texas">Texas</option>
            </select>
            <Multiselect
                placeholder="--Select County"
                options={countyOptions.options}
                displayValue="name"
                emptyRecordMsg="Select a state"
                closeIcon="close"
                avoidHighlightFirstOption="true"
                onSelect={addCounty}
                onRemove={removeCounty}
                />
            <input
                className={classes.text_input__width}
                name="city"
                placeholder="City"
                id="inputCity"
                /> <br />
            <input
                className={classes.text_input__width}
                name="street"
                placeholder="Street"
                id="inputStreet"
            /> <br />
        </div>
    )
});

export default LocationCard;