import React from 'react'
import './CountriesItem.css';
import {useHistory} from 'react-router-dom';

function CountriesItem(props: any) {

    let history = useHistory();

    const ridirectPageHandler = () =>{
        history.push("/detail-country", { alphaCode: props.country.alpha3Code })
    }

    return ( 
        
        <div className="card col-sm-4" style={{width: '18rem', margin:'1%'}}>
            <button onClick={ridirectPageHandler} style={{border:'none', background:'white'}}>
             <li style={{listStyleType:"none"}}>
                        <img src={props.country.flag} className="card-img-top img-fuid cards__item__img" alt={props.country.name} style={{padding: '3px'}}/>
                        <div className="card-body">
                            <h5 className="card-title" style={{textAlign:'center'}}>{props.country.name}</h5>
                            <p className="card-text">Region: {props.country.region}</p>
                            <p className="card-text">Capital: {props.country.capital}</p>
                            <p className="card-text">Population: {props.country.population}</p>
                        </div>
                     
            </li>
            </button>
        </div>
        
        )
}



export default CountriesItem

