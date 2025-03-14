

export default function Nav({children, styles, fixed = true, 
    bottom, pwa}: {
    children?: React.ReactNode,
    styles?: React.CSSProperties,
    fixed?: boolean,
    bottom?: boolean,
    pwa?: number
}) {

    const fixedStyles = {
        position: fixed ? 'fixed' as any : undefined,
        bottom: (fixed && bottom) ? 0 : '',
        top: (fixed && !bottom) ? 0 : '',
        left: fixed ? 0 : '',
        right: fixed ? 0 : '',
        zIndex: fixed ? 1000 : '',
        paddingBottom: (pwa && bottom) ? pwa+'rem' : '',
        paddingTop: (pwa && !bottom) ? pwa+'rem' : ''
    }

    styles = {
        ...(fixed ? fixedStyles : {}),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--primary-color)',
        width: '100%',
        height: '56px',
        ...styles
    }
    
    return <div style={styles}>
        {children}
    </div>
}