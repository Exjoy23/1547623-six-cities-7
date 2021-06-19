import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';

import useOutsideClick from '../../hooks/useOutsideClick';

function SortList({ sorts, activeSort, setIsActive, changeSort }) {
  const ulRef = useRef(null);

  useOutsideClick(ulRef, setIsActive);

  return (
    <ul
      ref={ulRef}
      onMouseEnter={() => setIsActive(true)}
      className="places__options places__options--custom places__options--opened"
    >
      {sorts.map((item) => (
        <li
          key={item}
          onClick={() => {
            changeSort(item);
            setIsActive(false);
          }}
          className={
            activeSort === item
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex="0"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

SortList.propTypes = {
  sorts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeSort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeSort: ActionCreator.changeSort,
};

export default connect(null, mapDispatchToProps)(SortList);
