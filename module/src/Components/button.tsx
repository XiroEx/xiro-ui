import React from 'react';

export default function Button({ children, onClick, styles, disabled }: {
    children: React.ReactNode,
    onClick?: () => void,
    styles?: React.CSSProperties,
    disabled?: boolean
}): React.ReactElement {
    const buttonStyles: React.CSSProperties = {
        padding: '0.5rem 1rem',
        backgroundColor: disabled ? 'var(--disabled-color)' : 'var(--primary-color)',
        color: disabled ? 'var(--disabled-text-color)' : 'var(--text-color)',
        border: '1px solid var(--secondary-color)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: '0.25rem',
        ...styles,
    };

    return <button style={buttonStyles} onClick={onClick} disabled={disabled}>{children}</button>;
}