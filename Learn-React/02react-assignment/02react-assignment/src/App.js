import './App.css';
import Map from './Components/Map';
import Navbar from './Components/Navbar'

function App() {

  return (
    <div style={{ backgroundColor: '#eeeeee', height: '100%' }}>

      <Navbar />
      <p style={{ textAlign: 'center', fontSize: '25px' }}>
        Q37 make a component that use map methode inside jsx
      </p>
      <Map />
    </div>
  );
}

export default App;
