import React from 'react'
import DetailCountriesItem from './DetailCountriesItem';

function DetailCountriesList(props : any) {
    return (
        <div className="container">
        <ul>
             <div className="row" style={{margin: '2%'}}>
                 {props.countries.map((countrie:any) => 
                     <DetailCountriesItem
                        key={countrie.id} 
                        shteti={countrie.name}
                        flag={countrie.flag}
                        kodimonedha={countrie.currencies.code}
                        simbolimonedha={countrie.currencies.symbol}
                        monedha={countrie.currencies.name}
                        gjuha={countrie.language.nativeName}/>)}
             </div>
        </ul>
    </div>       
    )
}

export default DetailCountriesList
