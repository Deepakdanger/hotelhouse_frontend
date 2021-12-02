import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Housetile = ({ ele }) => {
  const { title, cost, location } = ele;
  return (
    <div className="house_tile">
      <div className="house12">
        {/* <img className="meals_img" src={strMealThumb} alt="NA" /> */}
      </div>
      { title}, {cost}, {location}
      {/* <Link to={housedetail}>
        <button className="category_name" type="button" onClick={selectFood}>{strMeal}</button>
      </Link> */}
    </div>
  );
};

Housetile.propTypes = {
  ele: PropTypes.shape({
    title: PropTypes.string,
    cost: PropTypes.string,
    location: PropTypes.string,
  }),
};

Housetile.defaultProps = {
  ele: PropTypes.shape({
    title: 'Houses',
    cost: '1122',
    location: 'india',
  }),
};

export default Housetile;