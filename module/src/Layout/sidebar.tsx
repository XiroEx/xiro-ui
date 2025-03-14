import React from 'react';
import Backdrop from './backdrop';

interface SidebarProps {
    children?: React.ReactNode;
    styles?: React.CSSProperties;
    mobile?: boolean;
    show?: boolean;
    right?: boolean;
    toggle?: () => void;
}

export default function Sidebar({ children, styles, mobile = false, show = false, right = false, toggle }: SidebarProps) {

    console.log('Sidebar show prop:', show); // Debugging show prop

    const sidebarStyles: React.CSSProperties = {
        position: mobile ? 'fixed' : 'absolute',
        top: 0,
        bottom: 0,
        left: right ? 'auto' : 0,
        right: right ? 0 : 'auto',
        width: mobile ? '250px' : '300px',
        transform: mobile ? (show ? 'translateX(0)' : `translateX(${right ? '100%' : '-100%'})`) : 'none',
        transition: mobile ? 'transform 0.2s ease-in-out' : 'none',
        backgroundColor: 'var(--primary-color)',
        zIndex: 1002,
        ...styles,
    };

    console.log('Sidebar styles:', sidebarStyles); // Debugging styles

    if (!mobile) return (
        <div style={sidebarStyles}>
            {children}
        </div>
    );

    return (
        <>
            
                <Backdrop isVisible={show} onClick={toggle} styles={{zIndex: 1001}}/>
                <div style={sidebarStyles}>
                    {children}
                </div>
        </>
    );
}