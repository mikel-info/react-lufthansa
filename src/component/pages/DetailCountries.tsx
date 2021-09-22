import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import classes from '../DetailCountries.module.css';
import { useHistory } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { GrCurrency } from 'react-icons/gr';
import { FcCurrencyExchange } from 'react-icons/fc';
import { GiTwoCoins } from 'react-icons/gi';
import data from '../../data/countries.json';

import { MapContainer, TileLayer, LayersControl,Marker } from 'react-leaflet'

function DetailCountries(props : any) {
    
    const history = useHistory();  
    const [loadedCountries, setLoadedCountries] = useState([])


     useEffect(() => {
      // fetch(
      //   'https://react-countries-d7763-default-rtdb.firebaseio.com/countries.json'
      // )
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     const countries : any = [];

      //     {data.map((item : any,index:any) =>{
      //         if(props.location.state.alphaCode === item.alpha3Code ){
      //              countries.push(item);
      //     }
      //     })}
         
      //   setLoadedCountries(countries);
      //});
      getData();
      }, [])
 
      function getData(){
            const countries : any = [];
  
            {data.map((item : any,index:any) =>{
                if(props.location.state.alphaCode === item.alpha3Code ){
                     countries.push(item);
               }
              })
            }
           
          setLoadedCountries(countries);
      }

      function refreshPage() {
        setTimeout(()=>{
            window.location.reload();
        }, 500);
      }

      const goBack = () =>{
        history.replace("/")
      }
      
    return (
        <div className={classes.container}>
           
            <div className="card col-sm-4" style={{width: '30rem', margin:'1%', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
                {loadedCountries.map((item : any, index:number) =>{
                    return (
                        <div>
                            <img src={item.flag} key={item.id} className="card-img-top" alt={item.name} style={{padding: '3px', height:'20em'}}/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{textAlign:'center', fontWeight:700}} key={item.id}>{item.name}</h5>
                                    <p className="card-text" key={item.id}><span><GrCurrency style={{fontSize:'20px'}}/> Currency Code: </span>{item.currencies[0].code}</p>
                                    <p className="card-text" key={item.id}><span> <FcCurrencyExchange style={{fontSize:'20px'}}/> Currency Name: </span>{item.currencies[0].name}</p>
                                    <p className="card-text" key={item.id}><span><GiTwoCoins style={{fontSize:'20px'}}/> Currency Symbol:  </span>{item.currencies[0].symbol}</p>
                                    <p className="card-text" key={item.id}><span>Language:  </span>{item.languages[0].nativeName}</p>
                                    <p style={{textAlign:'center', marginBottom:'-3px', textDecoration:'underline'}}>Borders of the neighbors</p>
                                    
                                    <div className="p-2">
                                      {item.borders.length == 0 ? <p style={{textAlign:'center'}}>It has no neighbors</p> : 
                                        <div className="d-flex justify-content-center">
                                          {item.borders.map((border : string, index : number) =>{
                                              return <Link to={{pathname: "/detail-country", state:{alphaCode: border}}} onClick={refreshPage} style={{textDecoration:'none'}}> 
                                                      <div className="p-2">{border}</div>
                                                    </Link>
                                              }
                                          )}
                                        </div>
                                      }
                                     </div>
                                </div>

                                <button type="button" 
                                        className="btn btn-outline-warning" 
                                        onClick={goBack} 
                                        style={{ width:'90%', color:'black', fontSize: '16px', margin:'5px 0px 5px 20px'}}>
                                    Go Back <RiLogoutCircleLine style={{marginTop: '-3px'}}/> 
                                </button>
                                
                                     
                          </div>
                               
                    )})}
            </div>  
        </div>
        
      )
}

export default DetailCountries;
