//import Reacthook from "./reacthook";
import Hooks from './userefhooks'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './React-route';
import Contactus from './React-route/contactus';
import Aboutus from './React-route/aboutus';


function App() {
  return (
    <div>

      <Router>
        <nav>
       <Link to ='/'>Home</Link>
       <Link to ='/Contactus'>Contactus</Link>
       <Link to ='/Aboutus'>Aboutus</Link>
        </nav>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Contactus' element={<Contactus/>}/>
       <Route path='/Aboutus' element={<Aboutus/>}/>
       <Route path='*' element={<h1>page is not found</h1>}/>
       </Routes>
      </Router>
      {/*<Reacthook/>*/}
      <Hooks/>
    </div>
  );
}

export default App;