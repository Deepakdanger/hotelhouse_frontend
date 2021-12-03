import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CategoryFilter = ({ categorySelect }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'House', label: 'House' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Room', label: 'Room' },
  ];

  return (
    <div>
      <Select options={options} placeholder="Categories" onChange={(e) => categorySelect(e)} required />
    </div>
  );
};

CategoryFilter.propTypes = {
  categorySelect: PropTypes.func.isRequired,
};

export default CategoryFilter;