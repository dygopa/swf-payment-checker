import React from 'react'
import Button from '../../core/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

function Main() {

  let history = useNavigate()

  return (
    <div className='w-full h-fit flex flex-col justify-start items-center gap-10'>
      <div className='w-full flex flex-col justify-center items-center gap-3'>
        <span className='text-red-500 text-7xl relative block'>
          <FiAlertCircle/>
        </span>
        <p className='text-lg text-slate-900 font-normal'>Tal parece que la identificación no existe.</p>
      </div>
      <Button
        tile={"Regresar"} 
        variant={"btn-primary btn-block"} 
        onClick={()=>{ history("/") }}
      />
    </div>
  )
}

export default Main