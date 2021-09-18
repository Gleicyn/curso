import React from 'react'

const DiretaFilho = (props) => {

    return(
        <div>
            <div>{props.texto}</div>
            <div>{props.numero}</div>
            <div>{props.bool? 'verdadeiro' : 'Falso'}</div>
        </div>
    )

}
export default DiretaFilho