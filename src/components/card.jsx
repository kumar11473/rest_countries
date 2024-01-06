
import React, { useState } from "react";
// import './card.css';

// import axios from "axios";

const Card = ({value})=>{

    // const API ='https://restcountries.com/v3.1/name'
    // const [population,setPopulation] = useState('0000000');
    // const [continent,setContinent] = useState('continent');
    // const [capital,setCapital] = useState('capital');
    // const [officialName,setOfficialName]= useState('official name')
    // const [flagurl,setFlagurl]= useState('https://flagcdn.com/w320/in.png')

    // const getData = async()=>{
    //     try{
    //       const response = await axios.get(`${API}/${value.countryName}`)

    //       const responseData=response.data;
    //       // console.log("data are ")
    //        console.log(responseData[0]);
    //       // console.log(responseData[0].continents);
    //       // console.log(responseData[0].name.official);
          
    //         setCapital(responseData[0].capital)
    //         setContinent(responseData[0].continents[0]);
    //         setPopulation(responseData[0].population)
    //         setOfficialName(responseData[0].name.official);
    //         setFlagurl(responseData[0].flags.png)

    //     }catch(err){
           
    //       console.log(err);
    //     }
    //   }

    //   // if(value.DataReady){
    //     getData();
    //   // }

     

    return (
      
        <div className="card-container">
            <img className="country-img" alt="" src={value.flagurl} />
            <h1>{value.officialName}</h1>
            <h1>{`Population: ${value.population}`} </h1>
            <h1>{`Region: ${value.continent}`}</h1>
            <h1>{`Capital: ${value.capital}`}</h1>
        </div>
      
    )}

export default Card;