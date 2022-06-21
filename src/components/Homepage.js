import React, {useState} from 'react';
import SwitchButton from "./UI/SwitchButton";
import LocationCard from "./Cards/LocationCard";
import classes from './Cards/Cards.module.css'

const Homepage = () => {
    // Setting query type based on switch selected
    const [queryType, setQueryType] = useState('improved');

    // Flipping the query type passed to switchSelector
    const switchQueryType = () => {
        if (queryType === 'improved') { setQueryType('land') }
        else { setQueryType('improved') }
        console.log(queryType)
    };


    return (
        <div>
            <SwitchButton switchQuery={switchQueryType}/>
            <div className={classes.searchPanes_row}>
                <LocationCard/>
                <LocationCard/>
                <LocationCard/>
            </div>
        </div>
    )




    // Location card
    // Sales card
    // Structure / Details card

};

export default Homepage;