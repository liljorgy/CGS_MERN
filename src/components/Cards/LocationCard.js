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
import {TextInput} from 'grommet';

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
        var stateInput = selectedState[0].name
        if (stateInput === '') {
            setCountyOptions([]);
        }
        else if (stateInput === 'Indiana') {
            setCountyOptions(indianaCounties)
            setStateSelected('Indiana')
        }
        else if (stateInput === 'Kentucky') {
            setCountyOptions(kentuckyCounties)
            setStateSelected('Kentucky')
        }
        else if (stateInput === 'Maryland') {
            setCountyOptions(marylandCounties)
            setStateSelected('Maryland')
        }
        else if (stateInput === 'Michigan') {
            setCountyOptions(michiganCounties)
            setStateSelected('Michigan')
        }
        else if (stateInput === 'Ohio') {
            setCountyOptions(ohioCounties)
            setStateSelected('Ohio')
        }
        else if (stateInput=== 'Pennsylvania') {
            setCountyOptions(pennsylvaniaCounties)
            setStateSelected('Pennsylvania')
        }
        else if (stateInput === 'South Carolina') {
            setCountyOptions(southCarolinaCounties)
            setStateSelected('South Carolina')
        }
        else if (stateInput === 'Texas') {
            setCountyOptions(texasCounties)
            setStateSelected('Texas')
        }
        else if (stateInput === 'West Virginia') {
            setCountyOptions(westVirginiaCounties)
            setStateSelected('West Virginia')
        };
    };
    const statesOptions = {
        options: [
            {name: 'Ohio', id: 1},
            {name: 'West Virginia', id: 2},
            {name: 'Pennsylvania', id: 3},
            {name: 'Indiana', id: 4},
            {name: 'Kentucky', id: 5},
            {name: 'Maryland', id: 6},
            {name: 'Michigan', id: 7},
            {name: 'South Carolina', id: 8},
            {name: 'Texas', id: 9},
        ]
    }

    return (
        <div className={classes.card}>
            <h3>Location Details</h3>
            <Multiselect
                placeholder="--Select State --"
                options={statesOptions.options}
                displayValue="name"
                avoidHighlightFirstOption="true"
                onSelect={stateCountyLink}
                singleSelect={true}
                />
            <Multiselect
                placeholder="--Select County--"
                options={countyOptions.options}
                displayValue="name"
                emptyRecordMsg="Select a state"
                closeIcon="close"
                avoidHighlightFirstOption="true"
                onSelect={addCounty}
                onRemove={removeCounty}
                />
            <br/>
            <TextInput
                name="city"
                placeholder="City"
                id="inputCity"
                size="Small"
                />
            <TextInput
                name="street"
                placeholder="Street"
                id="inputStreet"
                size="Small"
                />
        </div>
    )
});

export default LocationCard;
//<input
//    className={classes.text_input__width}
//    name="city"
//    placeholder="City"
//    id="inputCity"
///> <br /><br/>
//<input
//    className={classes.text_input__width}
//    name="street"
//    placeholder="Street"
//    id="inputStreet"
///> <br />
