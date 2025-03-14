import React from 'react';

export default function Button({ children, onClick, styles }: {
    children: React.ReactNode,
    onClick?: () => void,
    styles?: React.CSSProperties,
}): React.ReactElement {
    const buttonStyles: React.CSSProperties = {
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-color)',
        border: '1px solid var(--secondary-color)',
        cursor: 'pointer',
        borderRadius: '0.25rem',
        ...styles,
    };

    return <button style={buttonStyles} onClick={onClick}>{children}</button>;
}