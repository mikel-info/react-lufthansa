import React from 'react'
import './CountriesItem.css';

function CountriesItem(props: any) {
    return ( 
        <div className="card col-sm-4" style={{width: '18rem', margin:'1%'}}>
             <li style={{listStyleType:"none"}}>
                        <img src={props.flag} className="card-img-top img-fuid cards__item__img" alt={props.shteti} style={{padding: '3px'}}/>
                        <div className="card-body">
                            <h5 className="card-title" style={{textAlign:'center'}}>{props.shteti}</h5>
                            <p className="card-text">Region: {props.rajoni}</p>
                            <p className="card-text">Capital: {props.kryqeyteti}</p>
                            <p className="card-text">Population: {props.popullsia}</p>
                        </div>
                     
            </li>
        </div>
        )
}



export default CountriesItem

