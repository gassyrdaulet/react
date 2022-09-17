import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [info, setInfo] = useState(0)

  const fetchData = async () => {
    setInfo((await axios.get('http://localhost:8080/data1')).data)
  }

  useEffect( () => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className='App-logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
        {
          info===0?
            ''
          :
            info.map((info, index) => <p key={index}>{info}</p>)
        }
    </div>
  );
}

export default App;
