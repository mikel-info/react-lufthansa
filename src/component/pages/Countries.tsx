import { useState, useEffect } from "react";
import CountriesList from '../CountriesList';
import { FcGlobe } from 'react-icons/fc';
import { FaArrowCircleUp } from 'react-icons/fa'
import { CgSmileSad } from 'react-icons/cg';
import data from '../../data/countries.json';
import '../Countries.css';
import '../../App.css'


function Countries (){
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedCountries, setLoadedCountries] = useState([])
    const [searchParam] = useState(["name"]);
    const [searchName, setSearchName] = useState("");
    const [filterParam, setFilterParam] = useState("All Region");
   

  const toggleVisibility = () => {
    if (window.pageYOffset > 200){
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  
function getData() {
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
}
  

    useEffect(() => {
        setLoading(true);
        // fetch(
        //   'https://countries-bcd24-default-rtdb.firebaseio.com/countries.json'
        // )
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((data) => {
        //     const countries : any = [];
    
        //     for (const key in data) {
        //       const countrie = {
        //         id: key,
        //         ...data[key]
        //       };
        //       countries.push(countrie);
        //     }
    
        //   setLoading(false);
        //   setLoadedCountries(countries);
        // });

        getData();

          window.addEventListener("scroll", toggleVisibility);
        return () =>{
          window.removeEventListener('scroll', toggleVisibility)
        }
      }, [])


      function search(loadedCountries : any) {      
        return loadedCountries.filter((item : any) => {
          if (item.region === filterParam) {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchName.toLowerCase()) > -1
                );
            });
          } else if (filterParam === "All Region")  {
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

    
      if(loading){
        return (
          <section className="loader"></section>
        )
      };
  
    return <section>
        {isVisible && <button className={'onTop'} onClick={scrollToTop}><FaArrowCircleUp /></button>}
       
        <h1 style={{textAlign:'center', margin:'2% 0'}}> <FcGlobe style={{marginBottom:'10px'}}/> All Countries</h1>

        <div> 
            <input 
            className="form-control form-control-sm" 
            type="text" aria-label=".form-control-sm example"  
            placeholder="Search for country" 
            value={searchName}  
            onChange={ (e: any)=>{ setSearchName(e.target.value) }} 
            style={{marginLeft:'30%', width:'40%'}} /> 
        </div>

        <div className='region-dropdown'>
            <div className='region-dropdown_control'>
                <select onChange={(e: any)=>{ setFilterParam(e.target.value) }}>
                          <option value="All Region">All Region</option>
                          <option value="Americas">America</option>
                          <option value="Africa">Africa</option>
                          <option value="Europe">Europe</option>
                          <option value="Asia">Asia</option>
                          <option value="Oceania">Oceania</option>
                </select>
            </div>
          </div>

        <ul>  
          {search(loadedCountries).length === 0 ? <p style={{textAlign:'center', fontSize:'30px', fontFamily:'cursive', marginTop:'4%', fontStyle:'oblique'}}>No data found <CgSmileSad />... </p>: <CountriesList countries={search(loadedCountries)}  /> }
        </ul>

    </section>
}

export default Countries;