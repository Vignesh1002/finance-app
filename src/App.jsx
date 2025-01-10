import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { ApiProvider } from './context/ApiContext';
import Data from './sections/Data';
import Footer from './sections/Footer';
import Main from './sections/Main';
import Navbar from './sections/Navbar';
import './index.css';

export const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <div className="App">
          <Navbar />
          <Main />
          <Data/>
          <Footer />
        </div>
      </ApiProvider>
    </QueryClientProvider>
  );
}

export default App;
