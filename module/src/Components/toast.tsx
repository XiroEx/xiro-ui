import React, { use, useEffect } from 'react';

export default function Toast({ message, show, anchor = 'top', ms = 200, onClick, styles}: {
    message: string,
    show: boolean,
    anchor?: 'top' | 'bottom',
    ms?: number,
    onClick?: () => void,
    styles?: React.CSSProperties,
}): React.ReactElement {

    const toastStyles: React.CSSProperties = {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: anchor === 'top' ? '1rem' : 'auto',
        bottom: anchor === 'bottom' ? '1rem' : 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-color)',
        borderRadius: '0.25rem',
        animation: `slide${show ? 'In' : 'Out'}${anchor} ${ms}ms forwards`, // Slide in or out
        zIndex: 1004,
        ...styles,
    };

    const sheet = document.createElement('style');
    sheet.innerHTML = `
        @keyframes slideIntop {
            from {
                transform: translateY(-200%);
            }
            to {
                transform: translateY(0);
            }
        }
        @keyframes slideOuttop {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-200%);
            }
        }
        @keyframes slideInbottom {
            from {
                transform: translateY(200%);
            }
            to {
                transform: translateY(0);
            }
        }
        @keyframes slideOutbottom {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(200%);
            }
        }
    `;
    document.head.appendChild(sheet);

    return <div style={toastStyles} onClick={onClick}>{message}</div>;
}