import React from 'react';
import PropTypes from 'prop-types';

const HouseFullDetail = ({ ele, changefav }) => {
  const {
    title, cost, location, category,
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
        <p>
          Category :
          {category}
        </p>
      </div>
      <div>
        <button className="house_favourite" type="button" onClick={changefav}>
          {ele.status ? 'Remove from Boookmark' : 'Bookmark'}
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
    data: PropTypes.shape({
      title: PropTypes.string,
      cost: PropTypes.string,
      location: PropTypes.string,
      category: PropTypes.string,
    }),
    status: PropTypes.bool,
  }),
  changefav: PropTypes.func.isRequired,
};

HouseFullDetail.defaultProps = {
  ele: PropTypes.shape({
    data: PropTypes.shape({
      title: 'fhfh',
      cost: '1000',
      location: 'fhfh',
      category: 'House',
    }),
    status: false,
  }),
};

export default HouseFullDetail;
