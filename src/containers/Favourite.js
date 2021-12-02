import React from 'react';
import {useQuery} from 'react-query';
import Housetile from '../components/Housetile';

const url = 'http://localhost:3000/favourites';

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
          console.log(data);
        return data;
      },
      (error) => {console.log(error)
  }); 

}

const Favourite = () => {  

  const {data, error, isError, isLoading } = useQuery('favourites', fetchHouses) 
    // first argument is a string to cache and track the query result

  const house_tile = data ? data.map((ele) => (<Housetile key={`ele-${ele.id}`} ele={ele} />)) : <p>hello111</p> ;
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }

    if(data){
      return(
        <div className='container'>
          <h1>Favourites</h1>
          {house_tile}
        </div>
    )
    }
};

export default Favourite;