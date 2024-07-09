import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './router';

const App = () => {
   const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hello, world!</h1>
        <Router />
      </div>
    </QueryClientProvider>
  );
};

export default App;
