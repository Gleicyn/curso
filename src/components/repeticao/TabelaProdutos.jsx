import React from 'react'
import produtos from '../repeticao/produtos'
import './tabelaProdutos.css'

const TabelaProdutos = () => {
    function getLinhas (){
        return produtos.map((produto, i)=> {
            return(
                <tr key={produto.id} className={i%2 ===0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
                {getLinhas()}

            </table>
        </div>
    )
}
export default TabelaProdutos