import React from 'react';
import PropTypes from 'prop-types';

const Displayhouses = ({ ele, selecthouse }) => {
  const { id, title, cost } = ele;
  console.log(ele);
  return (
    <div className="houstile">
      <span>{id} {title} {cost}</span>
      <button className="des" type="button" onClick={selecthouse}>Destroy</button>
    </div>
  );
};

Displayhouses.propTypes = {
  ele: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cost: PropTypes.string,
  }),
  selecthouse: PropTypes.func.isRequired,
};

Displayhouses.defaultProps = {
  ele: PropTypes.shape({
    id: 1,
    title: 'fhfh',
    cost: '2311',
  }),
};

export default Displayhouses;