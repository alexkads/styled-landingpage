import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

export const Input: React.FC<InputProps> = ({label, name, ...restProps}) => {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} {...restProps}/>
        </>
    )
}