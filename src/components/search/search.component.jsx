import React from 'react';
import './search.styles.css';

export const Search = props => {
  return (
    <input
      placeholder={props.placeholder}
      type="search"
      onChange={props.onChange}
      className="search"
    />
  );
};
