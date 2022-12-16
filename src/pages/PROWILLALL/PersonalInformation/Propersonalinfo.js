import React from 'react'
import { NavLink } from 'react-router-dom'
import Interface from '../../../components/flexwillinterface/interface'

function Propersonalinfo() {
    return (
        <div>
            <Interface>
                Prom Personal
                <NavLink to="/pro_executor_landing">Go To Executor</NavLink>
            </Interface>
        </div>
    )
}

export default Propersonalinfo