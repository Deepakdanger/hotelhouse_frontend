import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import Housetile from '../components/Housetile';
import { selectedHouseAction, setStatusAction } from '../actions';
import { fetchFavourites } from '../API';

const Favourite = () => {
  const dispatch = useDispatch();

  const {
    data, error, isError, isLoading,
  } = useQuery('favourites', fetchFavourites);
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
