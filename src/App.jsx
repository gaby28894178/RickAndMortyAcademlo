import { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import getRandom from './services/getRandom';
import LocationInfo from './component/card/LocationInfo';
import ResidentCard from './component/card/ResidentCard';

function App() {
  const [locationId, setLocationId] = useState(getRandom(126));
  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  const [location, getlocation, hasError] = useFetch(url);

  useEffect(() => {
    getlocation();
  }, [locationId]);
  const inputSerch = useRef()
//  console.log(location)

  const handlerSerch = e =>{
    e.preventDefault()
    if(inputSerch.current.value){
     setLocationId(inputSerch.current.value.trim())
    }
    else{
      setLocationId(getRandom(126))
    }
    
  }

  return (
    <div className='App'>
      <h1 className='App__title'>coloque un numero y busque la card</h1>
      <form action="" onSubmit={handlerSerch} className='form' >
        <input  type="text"  ref={inputSerch} />
        <button>Search</button>
      </form>
      {
        hasError
        ?(<h2>Error lo que decea no existe❌👀 de 1 a 126 </h2>)
        : ( <>
        <LocationInfo location={location} />
        <div className='card__container'>
        {  location?.residents.map( url =>(
           <ResidentCard  key={url} url={url} />
          ))}        
         </div>
       </>

        )}  
      
      
    </div>
  );
}

export default App;
