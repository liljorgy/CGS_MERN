import React from 'react';
import classes from './Results.module.css'

const ResultsTable = (props) => {
    const results = props.result;
    return (
        <tr>
           <td className={classes.table_num}>1</td>
           <td className={classes.address}>{results.location.street}</td>
           <td className={classes.city}>{results.location.city}</td>
        </tr>
    );
};

export default ResultsTable;