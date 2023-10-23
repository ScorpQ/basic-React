import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Root from './components/root';
import Anasayfa from './components/anasayfa';
import About from './components/about';
import SignIp from './components/sign-up';
import Articles from './components/articles';
import Article from './components/article';
import Categories from './components/categories';
import Profile from './components/profile';
import './App.css';


function App() {

  const routerX = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
      <Route index element={ <Anasayfa />} />
      <Route path="/about" element={ <About /> } />
      <Route path="/sign-up" element={ <SignIp /> } />
      <Route path="/articles" element={ <Articles />} />
      <Route path="/articles/:atest" element={ <Article />} /> { /* let { atest } = useParams();  ile test et */ }
      <Route path="/categories" element={ <Categories /> } />
      <Route path="/profile" element={ <Profile/> } />
    </Route>
  ));


  return (
    <div className="App">
      <RouterProvider router={routerX} />
    </div>
  );
}

export default App;
