import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Root from './components/root';
import './App.css';


function App() {

  const routerX = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>

    </Route>
  ));


  return (
    <div className="App">
      <RouterProvider router={routerX} />
    </div>
  );
}

export default App;
