import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Dashboard from './components/Dashboard';
import GlobalHeader from './components/GlobalHeader';

import AppProvider from './context/AppContext';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppProvider>
        <GlobalHeader title='CryptoHub' />
        <main className='mx-auto py-4 px-2 max-w-7xl'>
          <Dashboard />
        </main>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
