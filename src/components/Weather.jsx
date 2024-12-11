import axios from "axios"
import { useEffect, useState } from "react"


const Weather = () => {
    const [city, setCity] = useState("")
    const [weatherData , setweatherData] = useState({})
 
    const serchweather = () => {
        axios.get(import.meta.env.VITE_WEATHER_API_URL + `/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=London`)
        .then((res)=>{ 
            setweatherData(res.data)

        }).catch((err)=>{
            console.log(err)

        })

    }
  return (
    <div className="flex justify-center items-center">
        <div>
        <input type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
        <button onClick={serchweather}>Search</button>
        </div>
        </div>
  )
}

export default Weather