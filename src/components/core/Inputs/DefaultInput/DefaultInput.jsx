import React from 'react'
import './DefaultInput.css'
import { twMerge } from 'tailwind-merge'

const DefaultInput = (props) => {
    return (
        <input
        {...props}
        className={twMerge([
            "form-control",
            props["className"]
        ])}
        />
    )
}

export default DefaultInput