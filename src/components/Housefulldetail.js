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
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strYoutube: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
};

HouseFullDetail.defaultProps = {
  ele: PropTypes.shape({
    strMeal: '1',
    strCategory: 'fhfh',
    strYoutube: '1',
    strArea: 'fhfh',
    strInstructions: '1',
    strMealThumb: '1',
  }),
};

export default HouseFullDetail;
