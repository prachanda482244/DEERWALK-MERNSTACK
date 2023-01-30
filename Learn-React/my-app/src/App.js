import './App.css';
import MyCom from './Components/MyCom';
import Info from './Components/Info';
import Navbar from './Components/Navbar';

function App() {

  let obj = {
    name: 'Prachanda',
    surname: 'Rana',
    age: 22
  }
  console.log(obj.name)
  let { name, surname, age } = obj
  let elem = <div>Hello world</div>
  return (
    <>
      <div>
        <Navbar />
        Hello, My name is <span className='red'>  {name} </span>
        <span className="blue">{surname}</span>

        <div className="components">
          <MyCom name={name} age={age} isMarried="false" />
          <Info name={name} address='Ktm' />
        </div>
        {elem}

      </div>
    </>
  );
}

export default App;
