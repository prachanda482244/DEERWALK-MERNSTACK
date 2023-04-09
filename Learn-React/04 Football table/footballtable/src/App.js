import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  let [match, setMatch] = useState()
  let url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json'

  let getScore = async () => {
    let result = await axios({
      method: 'get',
      url: url
    })
    setMatch(result.data.matches)
  }
  useEffect(() => {
    getScore()
  }, [])

  return (
    <div className="text-center bg-gray-800 text-white py-2">
      {
        match.map((item, i) => {
          return (
            <div key={i}>{item}</div>
          )
        })
      }

    </div>
  )
}

export default App;
