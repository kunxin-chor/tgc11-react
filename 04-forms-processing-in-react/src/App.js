import logo from './logo.svg';
import './App.css';
import CircleForm from './CircleForm'
import AddTwo from './AddTwo'
import BMIForm from './BMIForm'
import GST from './gst'

function App() {
  return (
    <div className="App">
        <GST gst={0.07}/>
    </div>
  );
}

export default App;
