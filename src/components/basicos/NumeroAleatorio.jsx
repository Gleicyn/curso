import React from 'react'

const NumeroAleatorio = (props) =>{
    const aleatorio =parseInt( Math.random()*(props.max-props.min))

    return( 

    <div>
        <h2>Valor Aleatorio</h2>
        <p> Valor Mínimo: {props.min}</p>
        <p> Valor Máximo: {props.max}</p>
        <p>Numero Aleatório: {aleatorio}</p>
    </div>
        )
}
export default NumeroAleatorio