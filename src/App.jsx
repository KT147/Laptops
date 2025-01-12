import { Link, Route, Routes} from 'react-router-dom';
import './App.css'
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';
import NotFound from "./pages/NotFound"

function App() {

  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/notfound"><button>Not Found</button></Link>
      
      <Routes>
        <Route path="" exact element={ <Avaleht/> }/>
        <Route path="all" exact element={ <VaataArvuteid/> }/>
        <Route path="add" exact element={ <LisaArvuti/> }/>
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes> 
    </div>
  );
}

export default App
