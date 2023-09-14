import React, { useContext, useMemo, useState } from 'react'
import InputGroup from '../core/Inputs/InputGroup/InputGroup'
import DefaultInput from '../core/Inputs/DefaultInput/DefaultInput'
import Button from '../core/Buttons/Buttons'
import { HomeContext } from './context/HomeContext'
import { FiLink } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function main() {

  const {actions, dispatch, state} = useContext(HomeContext)
  const { checkUserID } = actions

  const {data, loading, successful, error} = state.userID

  let history = useNavigate()

  const [formData, setFormData] = useState({
    policy: null,
    id: null,
    passport: null,
    ruc: null
  })

  useMemo(()=>{
    if(error) history("/error")
    if(successful) window.open(data["LinkPago"], '_blank', 'noopener,noreferrer');
  },[loading])

  return (
    <div className='w-full h-fit flex flex-col justify-start items-center gap-5'>
      <p className='text-base text-slate-900 font-light'>Por favor, introduzca su número de identificación </p>
      <div className='w-full flex flex-col justify-start items-center gap-5'>
        <InputGroup label={"Nro. de Póliza"}>
          <DefaultInput type="text" disabled={formData.id || formData.passport || formData.ruc} 
            onChange={(e)=>{ setFormData({
              policy: e.target.value,
              id: null,
              passport: null,
              ruc: null,
            }) }} />
        </InputGroup>
        <InputGroup label={"Cédula"}>
          <DefaultInput type="text" disabled={formData.policy || formData.passport || formData.ruc} 
            onChange={(e)=>{ setFormData({
              policy: null,
              id: e.target.value,
              passport: null,
              ruc: null
            }) }} />
        </InputGroup>
        <InputGroup label={"RUC"}>
          <DefaultInput type="text" disabled={formData.policy || formData.passport || formData.id} 
            onChange={(e)=>{ setFormData({
              policy: null,
              id: null,
              ruc: e.target.value,
              passport: null,
            }) }} />
        </InputGroup>
        <InputGroup label={"Pasaporte"}>
          <DefaultInput type="text" disabled={formData.policy || formData.id || formData.ruc} 
            onChange={(e)=>{ setFormData({
              policy: null,
              id: null,
              ruc: null,
              passport: e.target.value,
            }) }} />
        </InputGroup>
      </div>
      <Button 
        loading={loading}
        tile={"Validar"} 
        variant={"btn-primary btn-block"} 
        onClick={()=>{ checkUserID(formData)(dispatch) }}
        disabled={
          (!formData.ruc &&
          !formData.passport &&
          !formData.policy &&
          !formData.id) 
          || 
          loading
        } 
      />
    </div>
  )
}

export default main