import React, {useState} from 'react';
import indianaCounties from "../Cards/Counties/indianaCounties";
import kentuckyCounties from "../Cards/Counties/kentuckyCounties";
import marylandCounties from "../Cards/Counties/marylandCounties";
import michiganCounties from "../Cards/Counties/michiganCounties";
import ohioCounties from "../Cards/Counties/ohioCounties";
import pennsylvaniaCounties from "../Cards/Counties/pennsylvaniaCounties";
import southCarolinaCounties from "../Cards/Counties/southCarolinaCounties";
import texasCounties from "../Cards/Counties/texasCounties";
import westVirginiaCounties from "../Cards/Counties/westVirginiaCounties";
import classes from '../Cards/Cards.module.css';
import {Multiselect} from "multiselect-react-dropdown";

const LocationCard = () => {
    const [countyOptions, setCountyOptions] = useState([]);

    const stateCountyLink = (selectedState) => {
        if (selectedState.target.value === '') {
            setCountyOptions([]);
        }
        else if (selectedState.target.value === 'Indiana') {
            setCountyOptions(indianaCounties)
        }
        else if (selectedState.target.value === 'Kentucky') {
            setCountyOptions(kentuckyCounties)
        }
        else if (selectedState.target.value === 'Maryland') {
            setCountyOptions(marylandCounties)
        }
        else if (selectedState.target.value === 'Michigan') {
            setCountyOptions(michiganCounties)
        }
        else if (selectedState.target.value === 'Ohio') {
            setCountyOptions(ohioCounties)
        }
        else if (selectedState.target.value === 'Pennsylvania') {
            setCountyOptions(pennsylvaniaCounties)
        }
        else if (selectedState.target.value === 'South Carolina') {
            setCountyOptions(southCarolinaCounties)
        }
        else if (selectedState.target.value === 'Texas') {
            setCountyOptions(texasCounties)
        }
        else if (selectedState.target.value === 'West Virginia') {
            setCountyOptions(westVirginiaCounties)
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
};

export default LocationCard;