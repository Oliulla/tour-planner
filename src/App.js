import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import './App.css';

function App() {
  return (
    <div className='app'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
