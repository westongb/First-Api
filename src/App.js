import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  fetch(url)
      .then (function (response) {
        console.log(response);
        return response.json()
       })
        .then(function(data){
          console.log(data.bpi.GBP.rate)
  });


  return (
    <div className="App">
      <h1>Marvel API</h1>
    </div>
  );
}

export default App;
