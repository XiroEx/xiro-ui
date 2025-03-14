import React from 'react';
import Backdrop from './backdrop';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
}

export default function Modal({ show, onClose, children, styles }: ModalProps) {
    if (!show) return null;

    const modalStyles: React.CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius:'0.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...styles,
    };

    return (
        <>
            <Backdrop isVisible={show} onClick={onClose}>
                <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </Backdrop>
        </>
    );
}

