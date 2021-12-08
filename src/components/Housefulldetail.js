import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const HouseFullDetail = ({ ele, changefav }) => {
  const {
    title, cost, location, category,
  } = ele.data;

  return (
    <div className="house_description">
      <div className="house_description_title">
        {title}
      </div>
      <div className="house_image">
        <div className="house_name_rating">
          <div>
            Name
          </div>
          <div className="star_rating1">
            <span className="checked"><FaStar /></span>
            <span className="checked"><FaStar /></span>
            <span className="checked"><FaStar /></span>
            <span className="checked"><FaStar /></span>
            <span className="unchecked"><FaStar /></span>
          </div>
        </div>
        <div className="cost_location1">
          $
          <span>
            {cost}
          </span>
          {'   '}
          <span className="cost_extend"> Per Month</span>
          <div>
            {location}
          </div>
          <div className="category_extend">
            {category}
          </div>
        </div>
      </div>
      <div className="house_extend_des">
        <div className="house_extend_title">
          About this listing
        </div>
        <div className="house_extend_description">
          It is description.
        </div>
      </div>
      <div>
        <button className="house_favourite" type="button" onClick={changefav}>
          {ele.status ? 'Remove from Boookmark' : 'Bookmark'}
        </button>
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
