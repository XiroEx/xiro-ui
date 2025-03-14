import React from 'react';

export default function Backdrop({ children, isVisible, onClick, styles }: {
    children?: React.ReactNode,
    isVisible: boolean,
    onClick?: () => void,
    styles?: React.CSSProperties,
}): React.ReactElement | null {
    if (!isVisible) return null;

    const backdropStyles: React.CSSProperties = {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slight opacity
        zIndex: 1003, // Ensure it covers other elements
        ...styles,
    };

    return <div style={backdropStyles} onClick={onClick}>
        {children}
    </div>;
}