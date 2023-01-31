import './App.css';
import StoreElem from './Components/StoreElem';

// LECTURE 01
// import MyCom from './Components/MyCom';
// import Info from './Components/Info';
// import Navbar from './Components/Navbar';
// import Describe from './Components/Describe';

function App() {

  // LECTURE 01
  // let obj = {
  //   name: 'Prachanda',
  //   surname: 'Rana',
  //   age: 22
  // }
  // console.log(obj.name)
  // let { name, surname, age } = obj
  // let elem = <div>Hello world</div>
  // let describeObj = {
  //   dname: 'Prachanda Rana',
  //   dage: 22,
  //   dnationality: 'Nepalese'
  // }
  // let { dname, dage, dnationality } = describeObj



  return (
    <div>

      {/* Lecture 01  */}
      {/* <div style={{ backgroundColor: '#272727', color: 'white' }}>
        <Navbar />
        Hello, My name is <span className='red'>  {name} </span>
        <span className="blue">{surname}</span>

        <div className="components">
          <MyCom name={name} age={age} isMarried="false" />
          <Info name={name} address='Ktm' />
        </div>
        {elem}
        <div style={{ marginTop: '.5rem' }}>
          <Describe name={dname} age={dage} nationality={dnationality} />
        </div>
      </div> */}

      {/* Lecture 02 */}
      <StoreElem />


    </div>
  );
}

export default App;
