import React  , { useEffect, useState } from 'react';
import { fetchAvgCubicWeight } from '../../../utils/apiCalls';


var AvgCubicWeight =  (props) => {

  var[ avgCubicWeight, setAvgCubicWeight ] = useState('calculating data...');

  
  useEffect(() => {
    fetchAvgCubicWeight()
      .then((data) => {
        setAvgCubicWeight(data + ' kg');
      })
  }, []);

  return(
    
    <div className='mt-3 ml-3'> 
      { 'Average cubic weight of all air conditioners: '  + avgCubicWeight }
    </div>
  );
}

export default AvgCubicWeight;