import React from 'react'

function DetailCountries(props : any) {
    return (
        <div className="card col-sm-4" style={{width: '18rem', margin:'1%'}}>
                <img src={props.flag} className="card-img-top img-fuid" alt={props.shteti} style={{padding: '3px'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'center'}}>{props.shteti}</h5>
                        <p className="card-text">Currency Code: {props.kodimonedha}</p>
                        <p className="card-text">Currency Name: {props.simbolimonedha}</p>
                        <p className="card-text">Currency Symobols: {props.monedha}</p>
                        <p className="card-text">Language: {props.gjuha}</p>
                    </div>
        </div>
    )
}

export default DetailCountries;
