import React from 'react'
import './Card.css'

const Card = (props) =>{

    const estilo = {
        backgroundColor: props.color ||'#F00',
        borderColor: props.color ||'#F00',
    }
    return(
        <div className="card" style={estilo}>
            <div className='title'>{props.titulo}</div>
            <div className='content'>
            {props.children}
            </div>
        </div>

    )
}
export default Card