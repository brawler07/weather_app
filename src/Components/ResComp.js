import { useEffect, useState } from "react"
import axios from "axios"
import "./ResComp.css"

const ResComp=(props)=>{
    // const [dt,setDt]= useState("")
    // console.log(new Date().getTime())
    // console.log(new Date(1652216400))
    // console.log(new Date(1652161304685))
    // console.log(new Date(2022,05,10).getTime())

    // const im=props.details.list[5].weather[0].icon


   
    // const getTime = () => {
    //     let today = new Date(),
    
    //     curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    
    
    //     setDt(curTime );

    //     console.log("Date: ",dt)
    //   }

      
 




   
    const city=props.currentDetails.name 
    const country=props.currentDetails.sys.country
    const temp= Math.floor(props.currentDetails.main.temp-273)
    const description=props.currentDetails.weather[0].description
    const [photo,setPhoto]=useState(description)
    const windSpeed=props.currentDetails.wind.speed


//   useEffect(()=>{
   
//         axios.get("https://api.unsplash.com/search/photos?client_id=76Fvw0zS19zBNAWBAko0Va3cW8svMBfzxS5eS5HHADk&query="+photo).then
//         ((res)=>setPhoto(res.data.results[0].urls.small)).catch((err)=>console.log(err))
//     },[])


    return(
        <div>




{/* <div className="weather_wrapper">
	<div className="weatherCard">
		<div className="currentTemp">
			<span className="temp">{temp} C</span>
			<span className="location">{city}</span>
		</div>
		<div className="currentWeather">
			<span className="conditions">&#xf00d;</span>
			<div className="info">
				<span className="rain">1.3 MM</span>
				<span className="wind">10 MPH</span>
			</div>
		</div>
	</div>
</div> */}





<div className="weather-body">
{/* {console.log("inside console",details)} */}
{/* <button onClick={getTime}>Get Time</button> */}
<div className="temp-body">
   <div className="degree">
       <h1 className="degree-text" >{temp}&deg;</h1>
   </div>
   <div className="city">
        <h1>{city},{country}</h1>
   </div>
</div>

<div className="img-body">
    <div className="icon">
<img src={"https://cdn-icons.flaticon.com/png/512/691/premium/691525.png?token=exp=1652132358~hmac=31d8dcae7b4e0ad65326bca10df5979e"} width="120px" height="120px"></img>


{/* <img src={photo} width="120px" height="120px"></img> */}
</div>
<div className="description">
{/* <h1 className="description-text">{description}</h1>    */}
<span className="description-text">{description}</span>
<span className="wind">{windSpeed} MPS</span>
</div> 
</div>


</div>








        </div>
    )
}
export default ResComp