import React from 'react';
import { Input, LabelDescr } from './Filter.styled';
import { LabelWrapper } from '../ContactForm/ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <LabelDescr>
      <LabelWrapper>Find contacts by name</LabelWrapper>
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="search"
      />
    </LabelDescr>
  );
};

export default Filter;
