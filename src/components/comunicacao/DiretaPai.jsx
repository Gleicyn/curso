import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = () => {
    return (
        <>
        <DiretaFilho texto='Junior' numero={20} bool={true}/>
        <DiretaFilho texto= 'Gabriel' numero={17} bool={false}/>
        </>
    )

}
export default DiretaPai