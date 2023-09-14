import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FiLoader } from 'react-icons/fi'
import './Buttons.css'

const Button = ({
    disabled,
    loading,
    tile,
    icon,
    onClick,
    variant
}) => {
    return(
        <button
        onClick={onClick}
        disabled={loading || disabled}
        className={twMerge([
            'btn flex items-center justify-center',
            variant
        ])}
        >
            { loading ? 
                <p>Cargando...</p>
            : 
            <>
                {icon}
                {tile}
            </>
            }
        </button>
    )
}

export default Button