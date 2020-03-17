import React, { Component } from 'react';
import './comp.css';
import './imag.css';
class Cuerpo extends Component {
    render() {
        return (
  
           <div className="Formulario ">
               <br/>
               <br/>
               <br/>

                

                
                <form method="post" action="https://es.reactjs.org/docs/getting-started.html">
                <fieldset>
                    <legend><h1>TaxiFast</h1></legend>

                    <label for="username">Correo Electronico</label><br/>
                    <input type="text" name="username" id ="username"
                        placeholder="example@gmail.com" size="30" maxlenght="15" required/>
                        <br />
                        <label for="pass"> contraseña</label><br/>
                        <input type="password" name="pass" id="pass" placeholder="**************" size="2" maxlenght="15"required/>
                        <br/><button type="button" class="btn btn-link">¿Olvidaste tu contraseña?</button>
                </fieldset>
                    
                    <p>
                        <input name="recordar" type="checkbox" />Recordar contraseña
                    </p>
                
                <input type="submit" value="Enviar"></input>  
                <button type="button" class="btn btn-link">Registrarse</button>

            </form>
                    
                           
                        
            </div>
        );
    }
}

export default Cuerpo;