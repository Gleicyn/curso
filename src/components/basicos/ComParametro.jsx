import React from 'react'
function ComParametro(props){
    const situacao = props.nota >=7? 'Aprovado' : 'Reprovado'

    return(
        <div>
            <h2>{props.titulo}</h2>
            <p> O aluno { props.aluno } 
              teve nota { props.nota }  
             é esta  { situacao }

             </p>

        </div>

    )

}
export default ComParametro