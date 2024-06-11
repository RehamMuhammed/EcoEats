import { useCallback, useEffect, useState } from 'react';
// import StoreCard from './StoreCard';
import './Products.css'
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

function AllProducts() {
  const { store } = useParams()
  const [AllProducts, setAllProducts] = useState([])
  const [filter, setFilter] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:8000/api/products/store/${store}`)
    const result = await res.json()
    console.log(result)
    setAllProducts(result)
  }, [])
  useEffect(() => {
    fetchData()
  }, [])
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  useEffect(() => {
    const filterAllProducts = AllProducts.filter(AllProducts => {
      console.log(AllProducts.name.includes(searchValue))
      console.log(AllProducts.name, searchValue)
      return (AllProducts.name.includes(searchValue))
    })
    console.log(filterAllProducts)
    setFilter(filterAllProducts)
  }, [searchValue])

  return (
    <div className='product-container' style={{ backgroundImage: `url(${require('../../images/white4.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* <input value={searchValue} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} /> */}

      <div className='d-flex flex-wrap py-5 gap-5 justify-content-center' >
        {
          AllProducts.map(AllProducts => <ProductCard key={AllProducts.id} AllProducts={AllProducts} />)
        }
      </div>
    </div>
  );
}

export default AllProducts;