import React from 'react'
import Aux from '../hoc/Auxilliary'
import classes from './Layout.module.css'

const layout = (props)=>{
    return(
        <Aux>
            <div> Toolbar Sidebar</div>
            <main className = {classes.content}>
                {props.children}
             </main>

        </Aux>
    )
    

}
export default layout