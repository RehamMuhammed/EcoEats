import { useCallback, useEffect, useState } from 'react';
// import StoreCard from './StoreCard';
import './List.css'
import ListCard from './ListCard';
import { useParams } from 'react-router-dom';

function AllCharities() {
  const { charity } = useParams()
  console.log({ charity })
  const [AllCharities, setAllCharities] = useState([])
  const [filter, setFilter] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:8000/api/charitylistmembers/charity/${charity}`)
    const result = await res.json()
    console.log(result)
    setAllCharities(result)
  }, [])
  useEffect(() => {
    fetchData()
  }, [])
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  useEffect(() => {
    const filterAllCharities = AllCharities.filter(AllCharities => {
      console.log(AllCharities.name.includes(searchValue))
      console.log(AllCharities.name, searchValue)
      return (AllCharities.name.includes(searchValue))
    })
    console.log(filterAllCharities)
    setFilter(filterAllCharities)
  }, [searchValue])

  return (
    <div className='product-container'>
      {/* <input value={searchValue} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} /> */}

      <div className='d-flex flex-wrap py-5 gap-5 justify-content-center container5' style={{ minHeight: "100vh" }} >
        {
          AllCharities.map(AllCharities => <ListCard key={AllCharities.id} AllCharities={AllCharities} />)
        }
      </div>
    </div>
  );
}

export default AllCharities;