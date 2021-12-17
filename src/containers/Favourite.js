import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import Housetile from '../components/Housetile';
import { selectedHouseAction, setStatusAction } from '../actions';

const url = 'https://floating-harbor-48342.herokuapp.com/favourites';

const fetchHouses = () => fetch(url, {
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

const Favourite = () => {
  const dispatch = useDispatch();

  const {
    data, error, isError, isLoading,
  } = useQuery('favourites', fetchHouses);
  const selectedHouse = (ele) => {
    localStorage.setItem('houseid', ele.id);
    dispatch(selectedHouseAction(ele));
    dispatch(setStatusAction('we'));
  };

  const houseTile = data ? data.map((ele) => (<Housetile key={`ele-${ele.id}`} ele={ele} selectHouse={() => selectedHouse(ele)} />)) : <p>hello111</p>;
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
  return (
    <div className="home_container">
      <h1 className="house_head">Favourite List</h1>
      <div className="house_tile slider">{houseTile}</div>
    </div>
  );
};

export default Favourite;
