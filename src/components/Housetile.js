import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Housetile = ({ ele, selectHouse }) => {
  const { id, title, cost, location, category } = ele;
  const first1 = '/houses/';
  return (
    <div className="house_tile">
      <div className="house12">
        {/* <img className="meals_img" src={strMealThumb} alt="NA" /> */}
      </div>
      <Link to={first1}>
        <button className="house_favourite" type="button" onClick={selectHouse}>{title}</button>
      </Link>
      {cost}, {location},{id},{category}
    </div>
  );
};

Housetile.propTypes = {
  ele: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cost: PropTypes.string,
    location: PropTypes.string,
  }),
  selectHouse: PropTypes.func.isRequired,
};

Housetile.defaultProps = {
  ele: PropTypes.shape({
    id:1,
    title: 'Houses',
    cost: '1122',
    location: 'india',
  }),
};

export default Housetile;