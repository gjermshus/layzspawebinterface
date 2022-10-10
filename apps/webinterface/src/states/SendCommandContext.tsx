import { createContext, useContext } from 'react';
import { SendCommandPayload } from '../models/sendCommand';

export const SendCommandContext = createContext<{ (message: SendCommandPayload): void }>(() => {
    console.error('SendCommandContext not initialized');
});

export function useSocketComamandSender() {
    if (SendCommandContext === null) {
        throw new Error('useSocketComamandSender must be used within a SocketCommandProvider');
    }

    return useContext(SendCommandContext);
}
