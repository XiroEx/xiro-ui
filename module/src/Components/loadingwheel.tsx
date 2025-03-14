
export default function LoadingWheel({ styles }: {
    styles?: React.CSSProperties,
}): React.ReactElement {   

    const wheelStyles: React.CSSProperties = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'radial-gradient(farthest-side,var(--primary-color) 97%,#0000) top/8px 8px no-repeat, conic-gradient(#0000 30%,var(--primary-color))',
        WebkitMask: 'radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0)',
        animation: 'spin 1s linear infinite',
        ...styles,
    };

    // Add the CSS for the spin animation
    const styleSheet = document.styleSheets[0];
    const keyframes =
        `@keyframes spin {
            100%{transform: rotate(1turn)}
        }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return <div style={wheelStyles}></div>;
}