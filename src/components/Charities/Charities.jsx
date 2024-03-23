import { useCallback, useEffect, useState } from 'react';
import CharityCard from './CharityCard';

function Charities() {
  const [charities, setCharities] = useState([])
  const fetchData = useCallback( async() => {
    const res = await fetch("https://ecoeatsapp.wiremockapi.cloud/charities/get")
    const {result} = await res.json()
    console.log(result)
    setCharities(result)
  },[]) 
  useEffect(() => {
    fetchData(  )
    },[])
  return (
    <div className='d-flex flex-wrap py-5 gap-5 justify-content-center' >
      {
        charities.map(charity => <CharityCard key={charity.Hotline} charity={charity}/> )
      }
    </div>
  );
}

export default Charities;