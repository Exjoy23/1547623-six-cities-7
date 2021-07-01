import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import SortList from '../sort-list/sort-list';

function SortForm({ sorts, activeSort }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={() => setIsActive((state) => !state)}
        className="places__sorting-type"
        tabIndex="0"
      >
        {activeSort}
        <svg
          style={
            isActive ? { transform: 'rotate(180deg) translateY(50%)' } : {}
          }
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isActive && (
        <SortList
          sorts={sorts}
          activeSort={activeSort}
          setIsActive={setIsActive}
        />
      )}
    </form>
  );
}

SortForm.propTypes = {
  sorts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeSort: PropTypes.string.isRequired,
};

export default memo(SortForm);
