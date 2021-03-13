import React  , { useEffect, useState } from 'react';
import { fetchItems } from '../../../utils/apiCalls';
import Item from '../components/item/Item';


var Items =  (props) => {

  const firstPage = "/api/products/1" ;
  var[ path, setPath ] = useState(firstPage);
  var[ data, setData ] = useState(null);

  
  useEffect(() => {
    getItems(path) ; 
  }, []);

  /**
   * fetch item from api then set the new path and item data
   */
  const getItems = (newPath) => {
    props.setLoadingState(true);
    fetchItems(newPath)
      .then((data)=>{
        setData(data);
        setPath(newPath)
        props.setLoadingState(false);
      })
      .catch(()=>{
        props.setLoadingState(false);
      })
  }


  const getAverageCubicWeight = () => {
    if(data && data['avg_cubic_weight']){
      return data['avg_cubic_weight'] + ' kg';
    }
    return 'There is no air conditioner in this page' ; 
  }

  return(
    
    <div className='container mt-3'>
      { data &&
        <div>
          Average cubic weight of air conditioners in this page: {getAverageCubicWeight()}
        </div>

      }
      <div className="row mt-4">
        { data && data['objects'] && data['objects'].map((item, index) =>
            <Item key = { index }
                  item = { item }
            />
          ) 
        }
      </div>
      <div className='float-right'>
        <button onClick={ () => getItems(firstPage) } 
                className="btn btn-white-navy mt-3 mb-3 mr-2"
                disabled={ path === firstPage ? true : false }
        >
          Go to first page
        </button>
        
        <button onClick={ () => getItems(data['next']) } 
                className="btn btn-white-navy mt-3 mb-3"
                disabled={ data && data['next'] ? false : true }
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default Items;