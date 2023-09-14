import React from 'react'
import './InputGroup.css'
import { twMerge } from 'tailwind-merge'

const InputGroup = ({
    label, 
    error, 
    icon, 
    style, 
    children
}) => {
    return (
        <div className={twMerge([
            'w-full h-fit relative flex flex-col justify-start items-start',
            style
        ])}>
            <div className='w-full flex justify-start items-center gap-2 text-left'>
                {icon && <span>{icon}</span>}
                <p className='text-slate-500 text-[0.85rem] font-normal'>{label}</p>
            </div>
            {children}
            {error && <p className='text-red-600 text-[0.85rem] font-medium'>{error}</p>}
        </div>
    )
}

export default InputGroup