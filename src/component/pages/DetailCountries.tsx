import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import classes from '../DetailCountries.module.css';

function DetailCountries(props : any) {

    const [loadedCountries, setLoadedCountries] = useState([])


     useEffect(() => {
         
        // setLoading(true);
        fetch(
          'https://restcountries.eu/rest/v2/all'
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const countries : any = [];

            {data.map((item : any,index:any) =>{
                if(props.location.state.alphaCode === item.alpha3Code ){
                     countries.push(item);
            }
            })}
           
        
          // setLoading(false);
          setLoadedCountries(countries);
        });
      }, [])
 


      function getBorder (border : any) {
        {border.map((item : any, index : number) =>{
            return (<p  className="card-text" style={{fontSize:"1000px"}} key={index}>{item}</p>)
        })}
      }

      function refreshPage() {
        setTimeout(()=>{
            window.location.reload();
        }, 500);
    }
      


    return (
        <div className={classes.container}>
            <div className="card col-sm-4" style={{width: '30rem', margin:'1%'}}>
                {loadedCountries.map((item : any, index:number) =>{
                    return (
                        <div>
                            <img src={item.flag} key={item.id} className="card-img-top" alt={item.name} style={{padding: '3px', height:'20em'}}/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{textAlign:'center', fontWeight:700}} key={item.id}>{item.name}</h5>
                                    <p className="card-text" key={item.id}><span>Currency Code: </span> {item.currencies[0].code}</p>
                                    <p className="card-text" key={item.id}><span>Currency Name: </span> {item.currencies[0].name}</p>
                                    <p className="card-text" key={item.id}><span>Currency Symobols:  </span> {item.currencies[0].symbol}</p>
                                    <p className="card-text" key={item.id}><span>Language:  </span> {item.languages[0].nativeName}</p>
                                    {item.borders.map((item : string, index : number) =>{
                                        return <Link to={{pathname: "/detail-country", state:{alphaCode: item}}} onClick={refreshPage}><p  className="card-text" key={index}>{item}</p></Link> 
                                    })}

                                {/* {getBorder(item.borders)} */}
        
                                </div>
                            </div>
                    )})}
            </div>
        </div>
      )
}

export default DetailCountries;
