import React from 'react';
import './App.css';
import Head from './componentes/head'
import Cuerpo from './componentes/dearrollo'

class App extends React.Component {
  render(){
     return (
       <div className="App " >
         <Head/>
         <Cuerpo/>

      
       </div>
      );
  }
}

export default App;
