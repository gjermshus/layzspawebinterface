import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppHeader } from './AppHeader';
import { IoProvider } from 'socket.io-react-hook';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppRoutes } from './AppRoutes';
import { UnitConnector } from './UnitConnector';

const createQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity,
            },
        },
    });

function App() {
    const [queryClient] = useState(createQueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <IoProvider>
                <RecoilRoot>
                    <UnitConnector>
                        <div className="font-sans text-[0.8125rem]">
                            <AppHeader />
                            <AppRoutes />
                        </div>
                    </UnitConnector>
                </RecoilRoot>
            </IoProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
