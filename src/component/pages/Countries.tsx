import { useState, useEffect } from "react";
import React from 'react';
import CountriesList from '../CountriesList';
// import FilterRegion from "../FilterRegion";

import '../FilterRegion.css';




function Countries (props : any){
    // const [loading, setLoading] = useState(true);
    const [loadedCountries, setLoadedCountries] = useState([])
    // const [regionCountries, setRegionCountries] = useState('');
    const [searchParam] = useState(["name"]);
    const [searchName, setSearchName] = useState("");
    const [filterParam, setFilterParam] = useState("All");

    
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
    
            for (const key in data) {
              const countrie = {
                id: key,
                ...data[key]
              };
              countries.push(countrie);
            }
    
          // setLoading(false);
          setLoadedCountries(countries);
        });
      }, [])



      function search(loadedCountries : any) {
        return loadedCountries.filter((item : any) => {
          if (item.region == filterParam) {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchName.toLowerCase()) > -1
                );
            });
          } else if (filterParam == "All")  {
              return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchName.toLowerCase()) > -1
                );
            });
            }
        });
      }

    const filterChangeHandler = (e : any) =>{
      setFilterParam(e.target.value);
    };

    

      

      // if(loading){
      //   return (
      //     <section>
      //       <p>Loading...</p>
      //     </section>
      //   )
      // }
  
    return <section>
        <h1 style={{textAlign:'center', marginTop:'2%'}}> All Countries</h1>

          <div> 
            <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example"  placeholder="Search for country" value={searchName}  onChange={(e) => setSearchName(e.target.value)} style={{marginLeft:'30%', width:'40%'}} />
          </div>

          {/* <FilterRegion countries={loadedCountries} selected={regionCountries} onChangeFilter={}/> */}
          <div className='expenses-filter'>
             <div className='expenses-filter__control'>
                 <select onChange={filterChangeHandler}>
                            <option value="All">All Region</option>
                            <option value="Americas">America</option>
                            <option value="Africa">Africa</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia">Asia</option>
                            <option value="Oceania">Oceania</option>
                 </select>
            </div>
            </div>
          
        <ul>
            <CountriesList countries={search(loadedCountries)}  />
        </ul>
    </section>
}

export default Countries;