import Recat from 'react'
import If from './If'

const UsuarioInfo=(props) =>{
    const usuario = props.usuario ||{}
    return(
        <div>
            <If test={usuario && usuario.nome}>
            Bem vindo <strong> { usuario.nome} </strong>
            </If>
            <If test={!usuario || !usuario.nome}>
            Bem vindo <strong> Amigo </strong>
            </If>
        </div>
    )

}
export default UsuarioInfo