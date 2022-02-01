import apiBeers from "../../utils/apiBeers"
import { useState, useEffect } from "react"
import { BeerCard } from "../BeerCard";

const AllBeers = () => {

  const [ allBeers, setAllBeers ] = useState([])

  useEffect(() => {
    const getAllBeers = async () => {
      const fetchBeers = await apiBeers.getAllBeers()
      setAllBeers(fetchBeers)
    }

    getAllBeers()
  }, [])

  return (<div>
      {allBeers.map(beer => {
        return <BeerCard key={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} creator={beer.contributed_by}/>
      })}
  </div>)
};

export default AllBeers;
