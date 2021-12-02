import React from 'react';
import {useQuery} from 'react-query';
import { useSelector } from 'react-redux';
import HouseFullDetail from '../components/Housefulldetail';


const Housedetails = () => {
    
  const { selected_house } = useSelector((state) => state);
  const url = 'http://localhost:3000/houses/';

  const fetchHouses=()=>{
    return fetch((url +selected_house),{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token"),
      },
  })
      .then((resp) => resp.json())
      .then((data) => {
          console.log(data);
        return data;
      },
      (error) => {console.log(error)
  }); 

}

  const {data, error, isError, isLoading } = useQuery('favourites', fetchHouses)

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }

    if(data){
      return(
        <div className='container'>
          <h1>House</h1>
          <HouseFullDetail key={`ele-${data.id}`} data={data} />
        </div>
    )
    }
};

export default Housedetails;