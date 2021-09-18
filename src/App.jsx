import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import  ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from "./components/basicos/NumeroAleatorio"
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/Condicional/ParOuImpar'
import UsuarioInfo from './components/Condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/contador'
import Sorteio from './components/mega/sorteio'


const App = ()=>{
    return(
        <div className="App">
            <h1>Fundamentos de react</h1>


            <div className="cards">
            <Card titulo="Sorteio" color='#EEEE00'>
                <Sorteio></Sorteio>
        </Card>
        <Card titulo="Contador" color='#EEEE00'>
                <Contador numeroInicial={10}></Contador>
        </Card>
    
        <Card titulo="Componente controlado(Input)" color='#40E0D0'>
                <Input></Input>
        </Card>
    
        <Card titulo="Comunicação Indireta" color='#FF34B3'>
                <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="Comunicação Direta" color='#7B68EE'>
                <DiretaPai></DiretaPai>
        </Card>
            
        <Card titulo=" Redenrização Condicional" color='#FF6A6A'>
                <ParOuImpar numero={7}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}} />
                <UsuarioInfo usuario={{email: 'Fernando'}} />
            </Card>
        <Card titulo="Desafio Repetição" color='#EE9A49'>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="Repetiçao" color= '#BC8F8F'>
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Componentes com Filhos" color='#b977e6'>
            <Familia>
           
            </Familia>
             </Card>

            <Card titulo="Numero Aleatorio" color='#4169E1'>
             <NumeroAleatorio min={5} max={50}/>
            </Card>
            <Card titulo="Fragmentos" color='#73eb73'>
                <Fragmento/>

            </Card>
            <Card titulo ="Com Parametros" color='#eeec6b'>
                 < ComParametro
                 titulo="Situação do Aluno"
                 aluno='Pedro'
                nota='9'
                />
            </Card>
            <Card titulo='Primeiro Componente' color='#eb73bd'>

        <Primeiro/>
            </Card>

        </div>
    </div>
    )


}
export default App