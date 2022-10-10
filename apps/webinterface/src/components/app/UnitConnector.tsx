import { PropsWithChildren } from 'react';
import { SendCommandContext } from '../../states/SendCommandContext';
import { useReactQuerySubscription } from './hooks/useReactQuerySubscription';

export function UnitConnector({ children }: PropsWithChildren) {
    const { send } = useReactQuerySubscription();
    return <SendCommandContext.Provider value={send}>{children}</SendCommandContext.Provider>;
}
