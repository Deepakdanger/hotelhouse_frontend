import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Housetile from '../components/Housetile';
import { selectedHouseAction, setCategoryAction } from '../actions';
import CategoryFilter from '../components/Categoryfilter';

const url = 'http://localhost:3000/houses';

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

const Home = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);
  const {
    data, error, isError, isLoading,
  } = useQuery('houses', fetchHouses);
    // first argument is a string to cache and track the query result
  const selectedHouse = (ele) => {
    localStorage.setItem('houseid', ele.id);
    dispatch(selectedHouseAction(ele));
  };
  const categorySelect = (ele) => dispatch(setCategoryAction(ele.value));

  const filteredHouse = filter === 'All' ? data : data.filter((house) => house.category === filter);

  const housetile = filteredHouse ? filteredHouse.map((ele) => (<Housetile key={`ele-${ele.id}`} ele={ele} selectHouse={() => selectedHouse(ele)} />)) : <p>hello111</p>;
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
      <div className="container">
        <h1>Houses</h1>
        <div className="book_category"><CategoryFilter categorySelect={categorySelect} /></div>
        {housetile}
      </div>
    );
  };

export default Home;
