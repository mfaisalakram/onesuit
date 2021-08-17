import './App.css';

import { useRoutes } from 'react-router-dom';
import routes from './routes';

import { LoginContextProvider } from './Context/loginContext';
function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <LoginContextProvider>{routing}</LoginContextProvider>
    </>
  );
}

export default App;
