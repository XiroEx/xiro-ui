import React, { useEffect, useState } from 'react';

export default function Main({children, styles}: {
    children?: React.ReactNode,
    styles?: React.CSSProperties
}): React.ReactElement {


    styles = {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'fixed',
        top: "56px",
        left: 0,
        right: 0,
        bottom: "56px",
        overflow: 'auto',
        ...styles
    }

     return <div style={styles}>
        {children}
    </div>
}