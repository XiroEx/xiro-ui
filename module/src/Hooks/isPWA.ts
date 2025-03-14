import { useEffect, useState } from 'react';


const useIsPWA = (): boolean => {
    const [isPWA, setIsPWA] = useState(false);

    useEffect(() => {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        setIsPWA(isStandalone);
    }, []);

    return isPWA;
};

export default useIsPWA;