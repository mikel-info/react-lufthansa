import { useState, useEffect } from "react";
import React from 'react';
import CountriesList from '../CountriesList';
import FilterRegion from "../FilterRegion";

function Countries (){
    const [loading, setLoading] = useState(true);
    const [loadedCountries, setLoadedCountries] = useState([])

    useEffect(() => {
        setLoading(true);
        fetch(
          'https://restcountries.eu/rest/v2/all'
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const countries : any = [];
    
            for (const key in data) {
              const countrie = {
                id: key,
                ...data[key]
              };
              countries.push(countrie);
            }
    
          setLoading(false);
          setLoadedCountries(countries);
        });
      }, [])

      if(loading){
        return (
          <section>
            <p>Loading...</p>
          </section>
        )
      }
  
    return <section>
        <h1 style={{textAlign:'center', marginTop:'1%'}}> All Countries</h1>
        <FilterRegion countries={loadedCountries}/>
        <ul>
            <CountriesList countries={loadedCountries} />
        </ul>
    </section>
}

export default Countries;