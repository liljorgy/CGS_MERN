import React, {useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useLocation} from "react-router-dom";
import {DataTable, Spinner} from 'grommet';
import HeaderBar from "./UI/HeaderBar";
import LocationQuery from "./Cards/LocationQuery";
import SalesQuery from "./Cards/SalesQuery";
import StructureQuery from "./Cards/StructureQuery";
import classes from './Cards/Cards.module.css';

const Results = () => {
    let location = useLocation();
    const filterNumber = location.state.filter.length
    var queryDict = {}
    // queryDict builds the props for the Location Query card
    location.state.filter.forEach(query => {
        for (let key in query) {
            queryDict[`${key}`] = `${query[key]}`
        }
    })
    const [comps, setComps] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    let content = <Spinner/>
    const compsData = [];
    let comps_counter = 0;

    // Fetch the comps data
    const fetchDataHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        if (comps.length === 0) {
            axios
                .get('http://192.168.1.159:8083/api/comps')
                .then(res => {
                    setComps(res.data);
                })
                .catch(error => {
                    setError(error);
                })
        }
        setIsLoading(false);
    },[comps.length]);

    useEffect(() => {
        fetchDataHandler();
    },[fetchDataHandler]);

    const formatForTable = (myKey, rslt, date1, date2) => {
        for (var i = 0; i < rslt.history.length; i++) {
            comps_counter += 1
            compsData.push({
                id: myKey,
                address: rslt.location.street,
                city: rslt.location.city,
                saleDate: rslt.history[i].sale_date.substr(0,10),
                salePrice: '$' + rslt.history[i].sale_price.toLocaleString('en-US', {minimumFractionDigits: 2}),
                reportDate: rslt.history[i].report_written_date.substr(0,10),
                structureType: rslt.history[i].structure_type,
                unitPrice: '$' + rslt.history[i].unit_price.toLocaleString('en-US', {minimumFractionDigits: 2}),
                filename: rslt.history[i].report_attributed_to
            })
        }
    };

    const filterFunction = (startArray, counter) => {
        var tempArray = []
        startArray.map((result, key) => {
            var tempHistory
            counter === 0 ? tempHistory = result.report_history :  tempHistory = result.history
            if (preFilterDict.state === result.location.state) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (preFilterDict.city === result.location.city) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (result.location.street.includes(preFilterDict.street)) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (preFilterDict.counties && preFilterDict.counties.includes(result.location.county)) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (preFilterDict.salePriceLow <= tempHistory[0].sale_price) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (preFilterDict.salePriceHigh >= tempHistory[0].sale_price) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (preFilterDict.saleDateLow <= tempHistory[0].sale_date) {
                tempArray.push({location: result.location ,history: tempHistory})
            } else if (preFilterDict.saleDateHigh >= tempHistory[0].sale_date) {
                tempArray.push({location: result.location ,history: tempHistory})
            } else if (preFilterDict.structureType === tempHistory[0].structure_type) {
                tempArray.push({location: result.location, history: tempHistory})
            } else if (preFilterDict.sizeLow >= tempHistory[0].size_numeric) {
                tempArray.push({location: result.location ,history: tempHistory})
            } else if (preFilterDict.sizeHigh <= tempHistory[0].size_numeric) {
                tempArray.push({location: result.location ,history: tempHistory})
            } else if (preFilterDict.queryType === tempHistory[0].report_type) {
                tempArray.push({location: result.location, history: tempHistory})
            }
        })
        return tempArray
    }
    // Filter the comps array into compsData array
    var myArray = []
    if (comps.length > 0) {
        var filterCounter = 0;
        while (filterCounter !== filterNumber) {
            var preFilterDict = location.state.filter[filterCounter] // This is the filter key/value pair
            if (preFilterDict.counties && preFilterDict.counties.length === 0) {
                preFilterDict = location.state.filter[filterCounter + 1]
            }
            if (filterCounter === 0) {
                myArray = filterFunction(comps, filterCounter)
            }
            else {
                myArray = filterFunction(myArray, filterCounter)
            }
            filterCounter += 1
        }
    }

    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    };

    // This part creates the final table prepped data
    if (myArray.length > 0) {
        //console.log(myArray)
        myArray.map((result, key) => {
            var tempSaleDate = result.history[0].sale_date.substring(0,10)
            var tempReportDate = result.history[0].report_written_date.substring(0,10)

            // Define the DataTable column details
            const columnsDefault = [
                { property: 'address',       header: 'Address', size: '150px'},
                { property: 'city',          header: 'City',  size: '50px'},
                { property: 'saleDate',      header: 'Sale Date', size: '50px'},
                { property: 'salePrice',     header: 'Sale Price', size: '50px'},
                { property: 'reportDate',    header: 'Report Date', size: '50px'},
                { property: 'structureType', header: 'Structure Type', size: '75px'},
                { property: 'unitPrice',     header: 'Unit Price', size: '50px'},
                { property: 'filename',      header: 'Filename', size: '100px'}
            ]
            formatForTable(key, result, tempSaleDate, tempReportDate)
            compsData.reverse(dynamicSort("reportDate"));
            console.log(compsData)
        content = <div>
            <p>Number of records found: {comps_counter}</p>
            <DataTable
                columns={columnsDefault}
                data={compsData}
                paginate={true}
            />
            </div>
            return ;
        })
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <p>Loading...</p>
    };

    return (
        <div>
            <HeaderBar />
            <div className={classes.searchPanes_row}>
                <LocationQuery location={queryDict}/>
                <SalesQuery sales={queryDict}/>
                <StructureQuery structure={queryDict}/>
            </div>
            <section>
                {content}
            </section>
        </div>
    )

};

export default Results;
