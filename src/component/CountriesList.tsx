import React from 'react'
import CountriesItem from './CountriesItem'

function CountriesList(props:any) {
    return (
     <div className="container">
        <ul>
             <div className="row" style={{margin: '2%'}}>
                 {props.countries.map((countrie:any) => 
                     <CountriesItem 
                        country = {countrie}
                        key={countrie.id} 
                    />
                    )}
             </div>
        </ul>
    </div>       
    )
}



export default CountriesList

