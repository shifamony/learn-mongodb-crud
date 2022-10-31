import './App.css';
import { toast } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routes/Routes';

function App() {

    const notify = () => toast("Wow so easy!");
  
  return (
    <div className="App max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <button className='btn btn-warning mt-4' onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
