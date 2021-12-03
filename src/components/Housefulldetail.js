import React from 'react';
import PropTypes from 'prop-types';

const HouseFullDetail = ({ ele, changefav }) => {
  const {
    title, cost, location,
  } = ele.data;

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
      <div>
      <button className="house_favourite" type="button" onClick={changefav}>
        {ele.status ? 'UNBoookmark' : 'Bookmark'}
        </button>
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
  changefav: PropTypes.func.isRequired,
  fav: PropTypes.string,
};

HouseFullDetail.defaultProps = {
  ele: PropTypes.shape({
    title: 'fhfh',
    cost: '1000',
    location: 'fhfh',
  }),
  fav: 'fhfh',
};

export default HouseFullDetail;
