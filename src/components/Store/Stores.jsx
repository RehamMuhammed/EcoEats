import { useCallback, useEffect, useState } from 'react';
import StoreCard from './StoreCard';
import './stores.css'

function Stores() {
  const [Stores, setStores] = useState([])
  const [filter, setFilter] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const fetchData = useCallback(async () => {
    const res = await fetch("http://localhost:8000/api/getStore")
    const { data } = await res.json()
    console.log(data)
    setStores(data)
  }, [])
  useEffect(() => {
    fetchData()
  }, [])
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  useEffect(() => {
    const filterStores= Stores.filter(stores => {
      console.log(Stores.storeName.includes(searchValue))
      console.log(Stores.storeName, searchValue)
      return (Stores.storeName.includes(searchValue))
    })
    console.log(filterStores)
    setFilter(filterStores)
  }, [searchValue])

  return (
    <div className='store-container' style={{ backgroundImage: `url(${require('../../images/white.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* <input value={searchValue} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} /> */}

      <div className='d-flex flex-wrap py-5 gap-5 justify-content-center' >
        {
          Stores.map(Stores => <StoreCard key={Stores.id} Stores={Stores} />)
        }
      </div>
    </div>
  );
}

export default Stores;