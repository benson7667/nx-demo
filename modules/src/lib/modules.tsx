import { Provider } from 'react-redux';
import { store } from './store';
import Inner from './inner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Modules() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Inner />
      </QueryClientProvider>
    </Provider>
  );
}
