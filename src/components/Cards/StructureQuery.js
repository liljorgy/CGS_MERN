import React from 'react';
import {Heading, Text} from 'grommet';
import classes from './Cards.module.css';

const StructureQuery = (props) => {
    let structureType, sizeLow, sizeHigh, priceLow, priceHigh;

    const convertPrice = (inputPrice) => {
        var formatter = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        })
        return formatter.format(inputPrice);
    }

    props.structure.structureType ? structureType = props.structure.structureType : structureType = ''
    props.structure.sizeLow ? sizeLow = props.structure.sizeLow : sizeLow = ''
    props.structure.sizeHigh ? sizeHigh = props.structure.sizeHigh : sizeHigh = ''
    props.structure.unitPriceLow ? priceLow = convertPrice(props.structure.unitPriceLow) : priceLow = ''
    props.structure.unitPriceHigh ? priceHigh = convertPrice(props.structure.unitPriceHigh) : priceHigh = ''

   return (
       <div className={classes.results_card}>
           <Heading level='4'>Structure Details</Heading>
           <Text weight='normal'><b>Structure Type: </b>{structureType}</Text><br/>
           <Text weight='normal'><b>Size - Low: </b>{sizeLow}</Text><br/>
           <Text weight='normal'><b>Size - High: </b>{sizeHigh}</Text><br/>
           <Text weight='normal'><b>Price/unit - Low: </b>{priceLow}</Text><br/>
           <Text weight='normal'><b>Price/unit - High: </b>{priceHigh}</Text><br/>
       </div>

   );
};

export default StructureQuery;