import './App.css';
import Sample from './components/Sample';
import {useState} from 'react';

function App() {
  var x = "Krati";
  const [file,setFile] = useState("");
  return (
    <div className="App">
      <h1>X</h1>
      <p>Covid Detector</p>
    <form>
     <label>Upload your file</label>  
     <input type="file" value></input>
    </form>
     
 
    </div>
  );
}

export default App;
