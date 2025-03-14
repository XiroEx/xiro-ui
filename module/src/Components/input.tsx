import React from 'react';

export default function Input({ value, onChange, placeholder, styles, id, name, className, type = 'text', disabled, readOnly, required, autoComplete }: {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    styles?: React.CSSProperties,
    id?: string,
    name?: string,
    className?: string,
    type?: string,
    disabled?: boolean,
    readOnly?: boolean,
    required?: boolean,
    autoComplete?: string,
}): React.ReactElement {
    const inputStyles: React.CSSProperties = {
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        border: '1px solid var(--secondary-color)',
        borderRadius: '0.25rem',
        outline: 'none',
        ...styles,
    };

    return <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        style={inputStyles} 
        id={id}
        name={name}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoComplete={autoComplete}
    />;
}