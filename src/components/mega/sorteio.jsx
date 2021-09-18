import React,{useState} from 'react'

const Sorteio = () =>{
    const [numeros, setNumeros]= useState(0)
    const aleatorio= () => parseInt(Math.random() * (59)) + 1
    


    
      return(
          <div>
              <button  onClick={()=>setNumeros(aleatorio(numeros))}>Sorteio</button>
              <div>
              <span>{numeros}</span>

              </div>
          </div>
      )
    

    
}
export default Sorteio