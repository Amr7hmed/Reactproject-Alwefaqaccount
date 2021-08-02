import './App.css';
import Control from './Component/Login/Control';
import { Contextprovider } from './Context';
function App() {
  return (
    <div className="App">
      <Contextprovider>
              <Control/>
              
      </Contextprovider>
    </div>
  );
}

export default App;