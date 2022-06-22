import React, {useState} from 'react';
import SwitchButton from "./UI/SwitchButton";
import LocationCard from "./Cards/LocationCard";
import SalesCard from "./Cards/SalesCard";
import StructureCard from "./Cards/StructureCard";
import DetailsCard from "./Cards/DetailsCard";
import classes from './Cards/Cards.module.css'

const Homepage = () => {
    // Setting query type based on switch selected
    const [queryType, setQueryType] = useState('improved');

    // Flipping the query type passed to switchSelector
    const switchQueryType = (event) => {
        event.preventDefault()
        if (queryType === 'improved') { setQueryType('land') }
        else { setQueryType('improved') }
        console.log(queryType)
    };

    return (
        <div>
            <SwitchButton switchQuery={switchQueryType}/>
            <div className={classes.searchPanes_row}>
                <LocationCard/>
                <SalesCard/>
                {(queryType === 'improved') && <StructureCard />}
                {(queryType === 'land') && <DetailsCard />}
            </div>
            <form onSubmit={switchQueryType}>
                <button type="submit" id="querySubmit">Run Query</button>
            </form>
        </div>
    )

};

export default Homepage;