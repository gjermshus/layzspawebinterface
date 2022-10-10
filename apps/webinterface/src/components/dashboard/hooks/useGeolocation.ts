import { useEffect, useState } from 'react';

export function useGeolocation() {
    const [geolocation, setGeolocation] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<'none' | 'not_allowed'>('none');

    // Get location from browser
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => setGeolocation(position),
            (errorResponse) => {
                if (errorResponse.code === errorResponse.PERMISSION_DENIED) {
                    setError('not_allowed');
                }
            }
        );
    }, []);

    return { geolocation, hasPermisson: error === 'none' };
}
