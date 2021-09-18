import React, { cloneElement } from  'react'

import FamiliaMembro  from './FamiliaMembro'

const Familia=(props)=>{
    
    return(
        <div>
           <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gabriel"/>
            <FamiliaMembro nome="Mateus"/>
            

        </div>
    )

}
export default Familia