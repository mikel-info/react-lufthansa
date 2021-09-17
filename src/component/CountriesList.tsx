import React from 'react'
import CountriesItem from './CountriesItem'

function CountriesList(props:any) {
    return (
     <div className="container">
        <ul>
             <div className="row" style={{margin: '2%'}}>
                 {props.countries.map((countrie:any) => 
                     <CountriesItem 
                        key={countrie.id} 
                        id={countrie.id} 
                        shteti={countrie.name}
                        flag={countrie.flag} 
                        kryqeyteti={countrie.capital} 
                        rajoni={countrie.region}
                        popullsia={countrie.population}/>)}
             </div>
        </ul>
    </div>       
           
    )
}



export default CountriesList

