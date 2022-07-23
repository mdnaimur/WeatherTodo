import { Link } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className='App'>
      <nav style={{
        background: "#fff",
        fontSize:"3em",
        marginTop:"110",
        marginBottom:"200px",
        textDecoration:"none"
      }}>
        <Link to="/todo">Todo</Link> |{" "}
        <Link to="/weather">Wather</Link>
      </nav>
    </div>
  );
}

export default App;
