import React from 'react';
import PropTypes from 'prop-types';

const HouseFullDetail = ({ ele }) => {
  const {
    title, cost, location,
  } = ele;

  return (
    <div className="food">
      <div className="food_discription">
        <p>
          Hotel Name :
          {title}
        </p>
        <p>
          Cost :
          {cost}
        </p>
        <p>
          Area :
          {location}
        </p>
       
      </div>
      <div className="h_discription">
        <p className="h_img">
          {/* <img src={strMealThumb} alt=" " /> */}
        </p>
      </div>
    </div>
  );
};

HouseFullDetail.propTypes = {
  ele: PropTypes.shape({
    title: PropTypes.string,
    cost: PropTypes.string,
    location: PropTypes.string,
  }),
};

HouseFullDetail.defaultProps = {
  ele: PropTypes.shape({
    title: 'fhfh',
    cost: '1',
    location: 'fhfh',
  }),
};

export default HouseFullDetail;
