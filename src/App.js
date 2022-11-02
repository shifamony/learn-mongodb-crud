import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routes/Routes';

function App() {
  
  return (
    <div className="App max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
