import React  , { useState } from 'react';
import './App.css';
import Items from './modules/items/containers/Items';
import AvgCubicWeight from './modules/avgCubicWeight/containers/AvgCubicWeight';


function App() {

  var[ loading, setLoadingState ] = useState(false);

  return (
    <div className='container overflow-auto mt-4 mb-4'>
      { loading &&
        <div className="backdrop-over-modal">
          <div className="modal-backdrop show"/>
          <div className="spinner-border">
          </div>
        </div>
      }
      <AvgCubicWeight />
      <Items setLoadingState={ setLoadingState } />
    </div>
  );
}

export default App;
