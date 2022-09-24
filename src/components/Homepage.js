import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import LocationCard from "./Cards/LocationCard";
import SalesCard from "./Cards/SalesCard";
import StructureCard from "./Cards/StructureCard";
import DetailsCard from "./Cards/DetailsCard";
import classes from './Cards/Cards.module.css'
import ToggleSwitch from "./UI/ToggleSwitch";
import {Button} from 'grommet';

const Homepage = () => {
    // Setting query type based on switch selected
    const [queryType, setQueryType] = useState('Improved Property');

    const locationDetailsHandler = useRef();
    const salesDetailsHandler = useRef();
    const structureDetailsHandler = useRef();
    const detailsDetailsHandler = useRef();
    let queryParameters = []
    const handleQueryParameters = (queryParameter) => {
        queryParameters = [...queryParameters, queryParameter]
    };

    // Flipping the query type passed to switchSelector
    //const switchQueryType = (event) => {
    const switchQueryType = () => {
        //event.preventDefault()
        if (queryType === 'Improved Property') {
            setQueryType('Land Sale')
        }
        else {
            setQueryType('Improved Property')
        }
    };

    const formatDate = (dateValue) => {
        const tempYear = dateValue.substring(0,4)
        const tempMonth = dateValue.substring(5,7)
        const tempDay = dateValue.substring(8,10)
        const tempDate = new Date(tempYear, tempMonth -1, tempDay).toISOString()
        return tempDate
    };

    const submitHandler = (event) => {
        // create filter
        queryParameters = [];
        var preFilter = [];
        locationDetailsHandler.current.setQueryParameters(event);
        salesDetailsHandler.current.setSalesQueryParameters(event);
        queryType === 'Improved Property' ? structureDetailsHandler.current.setStructureQueryParameters(event) : detailsDetailsHandler.current.setDetailsQueryParameters(event)
        queryParameters = [...queryParameters, {queryType: queryType} ]
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
            else if (queryKey.toString() === 'salePriceLow') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'salePriceHigh') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'saleDateLow') {
                const fmtDate = formatDate(queryParameters[x].saleDateLow)
                preFilter = [...preFilter, {saleDateLow: fmtDate}]
            }
            else if (queryKey.toString() === 'saleDateHigh') {
                const fmtDate = formatDate(queryParameters[x].saleDateHigh)
                preFilter = [...preFilter, {saleDateHigh: fmtDate}]
            }
            else if (queryKey.toString() === 'structureType') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'sizeLow') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'sizeHigh') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'unitPriceLow') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'unitPriceHigh') {
                preFilter = [...preFilter, queryParameters[x]]
            }
            else if (queryKey.toString() === 'queryType') {
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
                <SalesCard ref={salesDetailsHandler} onHandleQueryRequest={handleQueryParameters}/>
                {(queryType === 'Improved Property') && <StructureCard ref={structureDetailsHandler} onHandleQueryRequest={handleQueryParameters}/>}
                {(queryType === 'Land Sale') && <DetailsCard ref={detailsDetailsHandler} onHandleQueryRequest={handleQueryParameters}/>}
            </div>
            <form onSubmit={submitHandler}>
                <Button
                    type="submit"
                    id="querySubmit"
                    color="#61dafb"
                    primary label="Run Query"/>
            </form>
        </div>
    )

};

export default Homepage;