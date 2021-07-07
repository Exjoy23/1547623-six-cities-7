import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeActiveSort } from '../../store/actions';

import useOutsideClick from '../../hooks/useOutsideClick';

function SortList({ sorts, activeSort, setIsActive }) {
  const dispatch = useDispatch();

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
            dispatch(changeActiveSort(item));
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
  setIsActive: PropTypes.func.isRequired,
};

export default SortList;
