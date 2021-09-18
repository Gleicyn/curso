import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'


const IndiretaPai = () => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function fornecerInformacao (nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
        <div>
            <span> {nome} </span>
            <span>{idade} </span>
            <span>{nerd? 'Verdadeiro' : 'Falso'}</span>
        </div>
        <IndiretaFilho quandoClicar= {fornecerInformacao}></IndiretaFilho>
        </div>
    )
}
export default IndiretaPai