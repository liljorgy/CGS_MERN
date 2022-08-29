import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import LocationCard from "./OLD/LocationCard_Test";
import SalesCard from "./Cards/SalesCard";
import StructureCard from "./Cards/StructureCard";
import DetailsCard from "./Cards/DetailsCard";
import classes from './Cards/Cards.module.css'
import ToggleSwitch from "./UI/ToggleSwitch";

const Homepage = () => {
    // Setting query type based on switch selected
    const [queryType, setQueryType] = useState('improved');

    const locationDetailsHandler = useRef();
    let queryParameters = []
    const handleQueryParameters = (queryParameter) => {
        queryParameters = [...queryParameters, queryParameter]
    };

    // Flipping the query type passed to switchSelector
    //const switchQueryType = (event) => {
    const switchQueryType = () => {
        //event.preventDefault()
        if (queryType === 'improved') {
            setQueryType('land')
        }
        else {
            setQueryType('improved')
        }
    };

    const submitHandler = (event) => {
        // create filter
        queryParameters = [];
        var preFilter = [];
        locationDetailsHandler.current.setQueryParameters(event);
        console.log('Submit Handler: ', queryParameters);
        for (var x in queryParameters) {
            var queryKey = Object.keys(queryParameters[x]);
            if (queryKey.toString() === 'state') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'city') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'street') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'counties' && queryParameters[x].counties.length > 0) {
                preFilter = [...preFilter, queryParameters[x]]
            }
        }
        toResults(preFilter);
    };

    // Redirect onSubmit to results page
    const navigate = useNavigate();
    const toResults = (filter) => {
        console.log('To Results: ', filter);
        navigate('/results', {state: {filter}});
    };


    return (
        <div>
            <ToggleSwitch switchQuery={switchQueryType}/>
            <div className={classes.searchPanes_row}>
                <LocationCard ref={locationDetailsHandler} onHandleQueryRequest={handleQueryParameters}/>
                <SalesCard/>
                {(queryType === 'improved') && <StructureCard />}
                {(queryType === 'land') && <DetailsCard />}
            </div>
            <form onSubmit={submitHandler}>
                <button type="submit" id="querySubmit">Run Query</button>
            </form>
        </div>
    )

};

export default Homepage;