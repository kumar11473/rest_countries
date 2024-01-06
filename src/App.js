
import {  useEffect, useState} from 'react';
import './App.css';
import '../src/components/card.css';

import { CgDarkMode  } from "react-icons/cg"; 
import { FaSearch } from "react-icons/fa";
import { IconContext  } from 'react-icons';
import Card from './components/card';

import axios from "axios";


function App() {
  

  const [inputData,setInputData] = useState(''); // for taking value of search box


  const API ='https://restcountries.com/v3.1/name'

    const [population,setPopulation] = useState('0000000');
    const [continent,setContinent] = useState('continent');
    const [capital,setCapital] = useState('capital');
    const [officialName,setOfficialName]= useState('official name')
    const [flagurl,setFlagurl]= useState('https://flagcdn.com/w320/in.png')
    const [responseData,setResponseData] = useState([]);

    const getData = async()=>{
        try{
          if(inputData===''){
            const response = await axios.get('https://restcountries.com/v3.1/all')
            setResponseData(response.data.slice(0, 100));
          } 
          else{
            const response = await axios.get(`${API}/${inputData}`)
            setResponseData(response.data);
            
            // we don't need below function becoz now we are applying map on the data object returned
            // from our api. We are extracting all below values while applying map
            // setCapital(responseData[0].capital)
            // setContinent(responseData[0].continents);
            // setPopulation(responseData[0].population)
            // // setOfficialName(responseData[0].name.official);
            // // setFlagurl(responseData[0].flags.png)
          }
           console.log(responseData);
          
          

        }catch(err){
           
          console.log("error occured....");
        }
      }

  
      
useEffect(()=>{
  getData();
},[inputData])

  
  const handleChange = (event)=>{
    setInputData(event.target.value);
    
  }
 


  return (
    <div className="App">

     <nav className='navbar'>
      <h1>Where is the world?</h1>
      <div className='dark-mode'>
      <IconContext.Provider value={{ color: 'black', size: '24px' }}>
          <CgDarkMode className='dark-mode-icon' />
      </IconContext.Provider>
        <h1>Dark Mode</h1>
        </div>
     </nav>

     <div className='search-bar'>
      <IconContext.Provider value={{color: 'blue', size: '24px'}}>
      <FaSearch className=''/>
      </IconContext.Provider>
      <input className="search-box" placeholder='Enter country name ....'
      value={inputData} 
      onChange={handleChange} ></input>
    
     </div>
      
      <div className='main-div'>
      {
        responseData.map((value)=>(
          <Card value={{
            flagurl:value.flags.png,
            officialName:value.name.official,
            population:value.population,
            continent:value.continents,
            capital:value.capital
            
          }}/>
          ))
        }
        </div>

      
    </div>
  );
}

export default App;


















/*
 <input values={cname} onChange={(e)=>setCname(e.target.value)} placeholder='enter your value'></input>
      <button onClick={getData}>click me</button>
     <h1>{mydata}</h1>
*/