import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeActiveSort } from '../../store/actions';

import useOutsideClick from '../../hooks/use-outside-click';

function SortList({ sorts, activeSort, onSetIsActive }) {
  const dispatch = useDispatch();

  const ulRef = useRef(null);

  useOutsideClick(ulRef, onSetIsActive);

  return (
    <ul
      ref={ulRef}
      onMouseEnter={() => onSetIsActive(true)}
      className="places__options places__options--custom places__options--opened"
    >
      {sorts.map((item) => (
        <li
          key={item}
          onClick={() => {
            dispatch(changeActiveSort(item));
            onSetIsActive(false);
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
  onSetIsActive: PropTypes.func.isRequired,
};

export default SortList;
