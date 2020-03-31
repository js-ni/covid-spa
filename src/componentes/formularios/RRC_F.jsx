import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formularios.css'

class RRC_F extends Component {

    render() {
        return (
           <div className="border rounded shadow py-4 px-4 my-5">
               <p className="text-center titulo-formulario-rrc">FICHA DE REPORTE PARA CASOS DE COVID-19</p>
               <form action="">
                   <div className="form-group titulo-rrc">
                       <label htmlFor="titulo">Titulo:</label>
                       <input 
                        type="text"
                        className="form-control"
                        placeholder="Escoge un titulo breve y descriptivo para tu reporte..."
                        name="titulo"
                        id="titulo"
                        />
                   </div>
                   <div className="form-group  descripcion-rrc">
                       <label htmlFor="descripcion">Descripcion:</label>
                       <textarea 
                        name="descripcion" 
                        id="descripcion" 
                        cols="30" 
                        rows="3"
                        placeholder="Realizá una descripcion, breve y precisa del caso que deseas reportar..."
                        className="form-control"
                        />
                   </div>
                   <div className="form-group direccion-rrc">
                       <label htmlFor="direccion">Dirección:</label>
                       <textarea 
                        name="direccion" 
                        id="direccion" 
                        cols="30" 
                        rows="2"
                        placeholder="¿Deseas agregar la direccion del caso que vas a reportar?"
                        className="form-control"
                        />
                   </div>
                   <div className="my-3">
                       <button
                            type="button" 
                            className="btn btn-outline-primary btn-sm popover-rrc"
                            data-toggle="popover"
                            title="Reporte Anonimo"
                            data-content="Si deseas reportar un caso, sin hacer publica tu identidad selecciona la opcion: Reportar Anonimo, en caso contrario pulsa la opcion Compartir Identidad."
                            data-trigger="focus"
                        >
                            Mas Informacion...
                        </button>
                   </div>
                   <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            id="inlineCheckbox1" 
                            value="option1"
                            
                        />
                        <label className="form-check-label opt-anonimo-rcc" htmlFor="inlineCheckbox1">Reportar Anonimo</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="inlineCheckbox2" value="option2"/>
                        <label className="form-check-label opt-compartir-identidad-rcc" htmlFor="inlineCheckbox2">Compartir Identidad</label>
                    </div>
                    <div className="form-group my-3">
                        <button className="btn btn-success btn-sm btn-reportar-rcc">Reportar</button>
                    </div>
               </form>
              
           </div>
        )
    }
}

export default RRC_F;