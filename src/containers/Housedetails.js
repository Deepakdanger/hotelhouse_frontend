import React, { useState } from 'react';
import { useQuery } from 'react-query';
import HouseFullDetail from '../components/Housefulldetail';

const Housedetails = () => {
  const [state, setState] = useState({ Notice: '' });
  const url = 'http://localhost:3000/houses/';
  const urll = 'http://localhost:3000/favourites/';

  const deleteFavourites = (id) => {
    fetch((`${urll}/1`), {
      method: 'DELETE',
      body: JSON.stringify({
        house_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setState({ ...state, Notice: data.done });
      },
      () => {
      });
  };
  const createFavourites = (id) => {
    fetch((urll), {
      method: 'POST',
      body: JSON.stringify({
        house_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setState({ ...state, Notice: data.done });
      },
      () => {
      });
  };

  const FetchHousesDetail = () => fetch((url + localStorage.getItem('houseid')), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  })
    .then((resp) => resp.json())
    .then((data) => data,
      () => {
      });

  const {
    data, error, isError, isLoading,
  } = useQuery('Housedetail', FetchHousesDetail);

  const selectedfav = (ele) => {
    if (ele.status) {
      deleteFavourites(ele.data.id);
    } else {
      createFavourites(ele.data.id);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>
        Error!
        {error.message}
      </div>
    );
  }

  if (data) {
    return (
      <div className="container">
        <h1>House</h1>
        <HouseFullDetail key={`ele-${data.data.id}`} ele={data} changefav={() => selectedfav(data)} />
      </div>
    );
  }
  return (
    <div>
      Error
    </div>
  );
};

export default Housedetails;
