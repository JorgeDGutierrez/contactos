import React, { useState } from 'react';
import { connect } from 'react-redux';
import { agregarContacto } from '../actions/contactosActions'
import './componenteFuncional.css';

function ComponenteFuncional(props){

    const [state, setState ] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    })

    function handleChange(e){
            setState({
                ...state,
                [e.target.name] : e.target.value
            })
    }

    return (
        <form className="form" onSubmit = {(e) => {
                e.preventDefault()
                props.agregarContacto(state)
            }}>
            
            <p>Nombre: </p>
            <input className='input' type='text' name="nombre" value={state.nombre} onChange={(e) => handleChange(e)}/>

            <p>Apellido: </p>
            <input className='input' type='text' name="apellido" value={state.apellido} onChange={(e) => handleChange(e)}/>

            <p>Telefono: </p>
            <input className='input' type='text' name="telefono" value={state.telefono} onChange={(e) => handleChange(e)}/>

            <div>
                <input className='input' type="submit" value="Agregar Contacto" />
            </div>
        </form>
    )

}

export default connect(null, {agregarContacto} )(ComponenteFuncional)