import React from 'react';
import {Heading, Text} from 'grommet';
import classes from './Cards.module.css';

const SalesQuery = (props) => {
    let priceLow, priceHigh, dateLow, dateHigh

    const convertDate = (inputDate) => {
        var tempDate = new Date(inputDate)
        var tempYear = tempDate.getFullYear();
        var tempMonth = tempDate.getMonth()+1;
        var tempDay = tempDate.getDate();
        if (tempDay < 10) {
            tempDay = '0' + tempDay
        }
        if (tempMonth < 10) {
            tempMonth = '0' + tempMonth
        }
        return tempMonth + '/' + tempDay + '/' + tempYear
    };

    const convertPrice = (inputPrice) => {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        })
        return formatter.format(inputPrice);
    }

    props.sales.salePriceLow ? priceLow = convertPrice(props.sales.salePriceLow) : priceLow = '';
    props.sales.salePriceHigh ? priceHigh = convertPrice(props.sales.salePriceHigh) : priceHigh = '';
    props.sales.saleDateLow ? dateLow = convertDate(props.sales.saleDateLow) : dateLow = '';
    props.sales.saleDateHigh ? dateHigh = convertDate(props.sales.saleDateHigh) : dateHigh = '';

    return (
        <div className={classes.results_card}>
            <Heading level='4'>Sales Details </Heading>
            <Text weight='normal'><b>Price - Low: </b>{priceLow}</Text><br/>
            <Text weight='normal'><b>Price - High: </b>{priceHigh}</Text><br/>
            <Text weight='normal'><b>Date - Low: </b>{dateLow}</Text><br/>
            <Text weight='normal'><b>Date - High: </b>{dateHigh}</Text><br/>
        </div>
    )
};

export default SalesQuery;