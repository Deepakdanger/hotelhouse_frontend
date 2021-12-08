import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HouseFullDetail from '../components/Housefulldetail';
import { setStatusAction } from '../actions';

const Housedetails = () => {
  const [state, setState] = useState({ Notice: '' });
  const [datatest, setDatatest] = useState({ dataset: null });
  const { status } = useSelector((state) => state);

  const dispatch = useDispatch();

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

  useEffect(() => {
    fetch((url + localStorage.getItem('houseid')), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDatatest({ ...datatest, dataset: data });
      },
      () => {
      });
  }, [status]);

  const selectedfav = (data) => {
    if (data.dataset.status) {
      deleteFavourites(data.dataset.data.id);
    } else {
      createFavourites(data.dataset.data.id);
    }
    dispatch(setStatusAction(data.dataset.status));
  };

  if (datatest.dataset) {
    return (
      <div className="housedetail_container">
        <HouseFullDetail key={`ele-${datatest.dataset.data.id}`} ele={datatest.dataset} changefav={() => selectedfav(datatest)} />
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
