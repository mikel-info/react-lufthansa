import './CountriesItem.css';
import { useHistory } from 'react-router-dom';
import { IoIosPeople } from 'react-icons/io';
import { FaCity } from 'react-icons/fa';
import { RiGlobeFill } from 'react-icons/ri';

function CountriesItem(props: any) {

    let history = useHistory();

    const ridirectPageHandler = () =>{
        history.push("/detail-country", { alphaCode: props.country.alpha3Code })
    }

    return ( 
        <div className="card col-sm-4" style={{width: '18rem', margin:'1%'}}>
            <button onClick={ridirectPageHandler} style={{border:'none', background:'white'}}>
             <li>
                <img src={props.country.flag} className="card-img-top img-fuid cards__item__img" alt={props.country.name} />
                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:'center'}}>{props.country.name}</h5>
                    <p className="card-text"><RiGlobeFill style={{fontSize: '20px'}}/> Region: {props.country.region}</p>
                    <p className="card-text"><FaCity style={{fontSize: '20px'}}/> Capital: {props.country.capital}</p>
                    <p className="card-text"><IoIosPeople style={{fontSize: '30px'}}/> Population: {props.country.population}</p>
                </div>           
            </li>
            </button>
        </div>
    )
}



export default CountriesItem

