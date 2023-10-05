import './style.css';
import Contact from './components/contact.js';

function App() {
  const [loginState,  setLoginState] = useState(null);

  return (
    <div className = "contact">
      <h1>Contact</h1>
      <Contact />
    </div>
  );
}

export default App;
