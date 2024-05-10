import { useCallback, useEffect, useState } from 'react';
import CharityCard from './CharityCard';
import ListCard from '../CharityList/ListCard';

function Charities() {
  const [charities, setCharities] = useState([])
  const [filter, setFilter] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const fetchData = useCallback(async () => {
    const res = await fetch("http://localhost:8000/api/getCharity")
    const { data } = await res.json()
    console.log(data)
    setCharities(data)
  }, [])
  useEffect(() => {
    fetchData()
  }, [])
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  useEffect(() => {
    if (searchValue !== "") {
      const filter = charities?.filter(({ CharityName }) => {
        return CharityName
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      });
      setFilter(filter || []);
    } else {
      setFilter(charities || []);
    }
    // const filterCharities = charities.filter(charity => {
    //   console.log(charity.CharityName.includes(searchValue))
    //   console.log(charity.CharityName, searchValue)
    //   return (charity.CharityName.includes(searchValue))
    // })
    // console.log(filterCharities)
    // setFilter(filterCharities)
  }, [searchValue])

  return (
    <div className='container3'>
      <input value={searchValue} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />

      <div className='d-flex flex-wrap py-5 gap-5 justify-content-center' >
        {
          (searchValue === "" ? charities : filter).map(charity => <CharityCard key={charity.id} charity={charity} />)
        }
      </div>
    </div>
  );
}

export default Charities;