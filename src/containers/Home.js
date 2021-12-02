import React from 'react';
import {useQuery} from 'react-query';
import { useDispatch } from 'react-redux';
import Housetile from '../components/Housetile';
import { selectedHouseAction } from '../actions';

const url = 'http://localhost:3000/houses';

  const fetchHouses=()=>{
    return fetch(url,{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token"),
      },
  })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      },
      (error) => {console.log(error)
  }); 

}

const Home = () => {

  const dispatch = useDispatch();

  const {data, error, isError, isLoading } = useQuery('houses', fetchHouses) 
    // first argument is a string to cache and track the query result
    const selectedHouse = (ele) => dispatch(selectedHouseAction(ele));

  const house_tile = data ? data.map((ele) => (<Housetile key={`ele-${ele.id}`} ele={ele} selectHouse={() => selectedHouse(ele)} />)) : <p>hello111</p> ;
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }

    if(data){
      return(
        <div className='container'>
          <h1>Houses</h1>
          {house_tile}
        </div>
    )
    }
};

export default Home;