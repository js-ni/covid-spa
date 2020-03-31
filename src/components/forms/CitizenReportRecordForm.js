import React, {Component} from 'react'
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './formularios.css'

class CitizenReportRecordForm extends Component {
  state = {
    popoverOpen: false,
    selectedOption: 'nameless',
  }

  toggle = () => {
    let {popoverOpen} = this.state
    this.setState({popoverOpen: !popoverOpen})
  }

  handleOnchange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    })
  }

  render() {
    const {popoverOpen, selectedOption} = this.state

    return (
      <div className="border rounded shadow py-4 px-4 my-5">
        <p className="text-center titulo-formulario-rrc">
          FICHA DE REPORTE PARA CASOS DE COVID-19
        </p>
        <form action="">
          <div className="form-group titulo-rrc">
            <label htmlFor="title">Titulo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escoge un titulo breve y descriptivo para tu reporte..."
              name="title"
              id="title"
            />
          </div>
          <div className="form-group  descripcion-rrc">
            <label htmlFor="description">Descripcion:</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="3"
              placeholder="Realizá una descripcion, breve y precisa del caso que deseas reportar..."
              className="form-control"
            />
          </div>
          <div className="form-group direccion-rrc">
            <label htmlFor="adress">Dirección:</label>
            <textarea
              name="adress"
              id="adress"
              cols="30"
              rows="2"
              placeholder="¿Deseas agregar la direccion del caso que vas a reportar?"
              className="form-control"
            />
          </div>

          <div className="form-group my-3">
            <Button
              id="Popover1"
              type="button"
              outline
              color="primary"
              size="sm"
            >
              Mas informacion...
            </Button>
            <Popover
              placement="bottom"
              isOpen={popoverOpen}
              target="Popover1"
              toggle={this.toggle}
              data-trigger="focus"
            >
              <PopoverHeader>Reporte</PopoverHeader>
              <PopoverBody>
                Si deseas reportar un caso, sin hacer publica tu identidad
                selecciona la opcion: Reportar Anonimo, en caso contrario pulsa
                la opcion Compartir Identidad.
              </PopoverBody>
            </Popover>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="nameless"
              value="nameless"
              checked={selectedOption === 'nameless'}
              onChange={this.handleOnchange}
            />
            <label
              className="form-check-label opt-anonimo-rcc"
              htmlFor="nameless"
            >
              Reportar Anonimo
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="identified"
              value="identified"
              checked={selectedOption === 'identified'}
              onChange={this.handleOnchange}
            />
            <label
              className="form-check-label opt-compartir-identidad-rcc"
              htmlFor="identified"
            >
              Compartir Identidad
            </label>
          </div>

          <div className="form-group my-3">
            <button className="btn btn-success btn-sm btn-reportar-rcc">
              Reportar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CitizenReportRecordForm
