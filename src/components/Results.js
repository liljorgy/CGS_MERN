import React, {useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useLocation} from "react-router-dom";
import {DataTable, Spinner} from 'grommet';
import HeaderBar from "./UI/HeaderBar";
import LocationQuery from "./Cards/LocationQuery";

const Results = () => {
    let location = useLocation();
    const filterNumber = location.state.filter.length
    var queryDict = {}
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
                .get('http://localhost:8083/api/comps')
                .then(res => {
                    setComps(res.data);
                })
                .catch(error => {
                    setError(error);
                })
        }
        setIsLoading(false);
    },[]);

    useEffect(() => {
        fetchDataHandler();
    },[fetchDataHandler]);

    const formatForTable = (myKey, rslt, date1, date2) => {
            comps_counter += 1
            compsData.push({
                id: myKey,
                address: rslt.location.street,
                city: rslt.location.city,
                saleDate: date1,
                salePrice: '$' + rslt.history[0].sale_price.toLocaleString('en-US'),
                reportDate: date2,
                structureType: rslt.history[0].structure_type,
                unitPrice: '$' + rslt.history[0].unit_price.toFixed(2),
                filename: rslt.history[0].report_attributed_to
            })
    };

    // Filter the comps array into compsData array
    var myArray = []
    if (comps.length > 0) {
        var filterCounter = 0;
        while (filterCounter != filterNumber) {
            var preFilterDict = location.state.filter[filterCounter] // This is the filter key/value pair
            if (filterCounter === 0) {
                comps.map((result, key) => {
                    if (preFilterDict.state === result.location.state) {
                        myArray.push({location: result.location, history: result.report_history})
                    } else if (preFilterDict.city === result.location.city) {
                        myArray.push({location: result.location, history: result.report_history})
                    }
                })
            }
            else {
                var newMyArray = []
                myArray.map((result, key) => {
                    if (preFilterDict.state === result.location.state) {
                        newMyArray.push({location: result.location, history: result.history})
                    } else if (preFilterDict.city === result.location.city) {
                        newMyArray.push({location: result.location, history: result.history})
                    }
                })
                myArray = newMyArray
            }
            filterCounter += 1
        }
    };


    if (myArray.length > 0) {
        // Define the date format options for parsing the DB data
        var formatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        };
        myArray.map((result, key) => {
            var tempSaleDate = new Date(result.history[0].sale_date)
                .toLocaleDateString('en-US',formatOptions);
            var tempReportDate = new Date(result.history[0].report_written_date)
                .toLocaleDateString('en-US',formatOptions);

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
            <LocationQuery location={queryDict}/>
            <section>
                {content}
            </section>
        </div>
    )

};

export default Results;
