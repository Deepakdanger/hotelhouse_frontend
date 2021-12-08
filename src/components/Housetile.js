import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Housetile = ({ ele, selectHouse }) => {
  const {
    id, title, cost, location, category,
  } = ele;
  const first1 = '/houses/';
  return (
    <div className="house_tile1 slide">
      <Link to={first1}>
        <button className="house_favourite" type="button" onClick={selectHouse}>{title}</button>
      </Link>
      {cost}
      ,
      {location}
      ,
      {id}
      ,
      {category}
      <div className="star_rating">
        <span className="checked"><FaStar /></span>
        <span className="checked"><FaStar /></span>
        <span className="checked"><FaStar /></span>
        <span className="checked"><FaStar /></span>
        <span className="unchecked"><FaStar /></span>
      </div>
    </div>
  );
};

Housetile.propTypes = {
  ele: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cost: PropTypes.string,
    location: PropTypes.string,
    category: PropTypes.string,
  }),
  selectHouse: PropTypes.func.isRequired,
};

Housetile.defaultProps = {
  ele: PropTypes.shape({
    id: 1,
    title: 'Houses',
    cost: '1122',
    location: 'india',
    category: 'House',
  }),
};

export default Housetile;
