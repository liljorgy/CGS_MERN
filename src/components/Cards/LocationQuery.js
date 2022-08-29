import React from 'react';
import {Heading, Text} from 'grommet';
import classes from './Cards.module.css';

const LocationQuery = (props) => {
    return (
        <div className={classes.results_card}>
            <Heading level='4'> Location Details </Heading>
            <Text weight='normal'><b>State:</b> {props.location.state}</Text><br/>
            <Text weight='normal'><b>County:</b> {props.location.counties}</Text><br/>
            <Text weight='normal'><b>City:</b> {props.location.city}</Text><br/>
            <Text weight='normal'><b>Street:</b> {props.location.street}</Text><br/>
        </div>
    )

};

export default LocationQuery;