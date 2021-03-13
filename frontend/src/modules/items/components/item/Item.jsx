import React from 'react';

var Item =  (props) => {

  return(

    <div className="col-6">
      <div className="card border-light mb-3">
        <div className="card-body">
          <h5 className="card-title">{ props['item']['title'] } </h5>
          <p className="card-text">{ props['item']['category'] } </p>
        </div>
        <div className="card-footer">
          <p> 
            Cubic weight: { props['item']['cubic_weight'] ? props['item']['cubic_weight'] + ' kg' : 'N/A'} 
          </p>
        </div>
      </div>
    </div>
    

  );
}
  

export default Item;