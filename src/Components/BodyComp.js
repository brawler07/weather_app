import axios from "axios"
import { useState} from "react"

import ResComp from"./ResComp"

import "./BodyComp.css"


const BodyComp=()=>{

    const [city,setCity]=useState("")
    const [currentDetails,setCurrentDetails]=useState("")
    const [details,setDetails]=useState("")
    const isEmpty = Object.keys(currentDetails).length === 0
    const handleCity=(e)=>{
        e.preventDefault()
        setCity(e.target.value)
    }


    


// const checkWeather=(e)=>{
//     e.preventDefault()
//     axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=hourly,minutely&appid=3f1142675b11906456cf3fa8294bb210`).then(
        
// res=>setDetails(res.data)).catch(err=>console.log(err))

 
// }





const checkWeather=(e)=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f1142675b11906456cf3fa8294bb210`).then(
        
res=>setCurrentDetails(res.data)).catch(err=>console.log(err))

 
}



// const checkWeather=(e)=>{
//     e.preventDefault()
//     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=15.386033&lon=73.844040&appid=3f1142675b11906456cf3fa8294bb210`).then(
        
// res=>setDetails(res.data)).catch(err=>console.log(err))

// console.log(new Date(1652056669)) 
// }

    return(
       
    <div className="bod">
         {console.log("currentDetails: ",currentDetails)}
        
        <div>
        <h1 className="app">Weather App</h1>




        <form className="row g-3 search-button">
  <div className="col-auto">
    
    <input type="text" className="form-control" id="inputPassword2" placeholder="Enter a city name" onChange={(e)=>handleCity(e)} style={{backgroundColor:"rgba(24,24,27,0.7)",color:"white"}}></input>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-light mb-3" onClick={(e)=>checkWeather(e)}>check Weather</button>
  </div>
</form>



        {/* <input type="text" placeholder="Enter city name" onChange={(e)=>handleCity(e)}></input>
        <button type="submit" onClick={(e)=>checkWeather(e)}>Find</button> */}
        </div>
        <div>
        {isEmpty?<></>:<ResComp currentDetails={currentDetails}></ResComp>}
      
         </div>
       
 



        </div>


    )
}
export default BodyComp