import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import HouseFullDetail from '../components/Housefulldetail';
import { setStatusAction } from '../actions';
import { deleteFavApi, createFavApi, fetchhouseApi } from '../API';

const Housedetails = () => {
  const [state, setState] = useState({ Notice: '' });
  const [datatest, setDatatest] = useState({ dataset: null });
  const { status } = useSelector((state) => state);
  const alert = useAlert();

  const dispatch = useDispatch();

  const deleteFavourites = (id) => {
    deleteFavApi(id)
      .then((data) => {
        alert.success('Bookmark Deleteted');
        setState({ ...state, Notice: data.done });
      });
  };
  const createFavourites = (id) => {
    createFavApi(id)
      .then((data) => {
        alert.success('Bookmark created');
        setState({ ...state, Notice: data.done });
      });
  };

  useEffect(() => {
    fetchhouseApi()
      .then((data) => {
        setDatatest({ ...datatest, dataset: data });
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
