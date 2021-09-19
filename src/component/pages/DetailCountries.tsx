import React from 'react'
import DetailCountriesList from '../DetailCountriesList'

function DetailCountries(props : any) {
    return (
        <div>
           
            <DetailCountriesList countries={props.countries}  />
        
        </div>
    )
}

export default DetailCountries
