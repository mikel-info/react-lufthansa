import React from 'react';

import './FilterRegion.css';

const FilterRegion = (props :any) => {
    // const dropdownChangeHandler = (event :any) =>{
    //     props.onChangeFilter(event.target.value);
    // };

    var resArr : any = [];
   
    props.countries.forEach(function(item : any){
         var i = resArr.findIndex((x : any) => x.name === item.region);
             if(i <= -1 && item.region){
                  resArr.push({ name: item.region});
    }
    });
    

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
          
        <label>Filter by year</label>
        <select> {resArr.map((item:any) => 
            <option key={item.name} value={item.name}>
                {item.name}
            </option>
        )}
       {/* onChange={dropdownChangeHandler} */}
        </select>
      </div>
    </div>
  )
};

export default FilterRegion;