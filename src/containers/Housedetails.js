import React from 'react';
import {useQuery} from 'react-query';
import { useSelector } from 'react-redux';
import HouseFullDetail from '../components/Housefulldetail';

const Housedetails = () => {
    
  const { selected_house } = useSelector((state) => state);
  const url = 'http://localhost:3000/houses/';
  const urll = 'http://localhost:3000/favourites/';

  const deleteFavourites= (id) =>{
    fetch((urll+'/1'),{
      method: 'DELETE',
      body: JSON.stringify({
        "house_id": id,
    }),
      headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token"),
      },
  })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      },
      (error) => {console.log(error)
  }); 
}
const createFavourites = (id) => {
  fetch((urll),{
    method: 'POST',
    body: JSON.stringify({
      "house_id": id,
    }),
    headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem("token"),
    },
})
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    },
    (error) => {console.log(error)
}); 
}

  const FetchHousesDetail= () =>{
    return fetch((url + selected_house),{
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

  const {data, error, isError, isLoading } = useQuery('Housedetail', FetchHousesDetail)

  
  const selectedfav= (ele)=>{
    console.log(ele);
    ele.status ? deleteFavourites(ele.data.id) : createFavourites(ele.data.id);
  }

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
          <HouseFullDetail key={`ele-${data.data.id}`} ele={data} changefav={() => selectedfav(data)} />
        </div>
    )
    }
};

export default Housedetails;