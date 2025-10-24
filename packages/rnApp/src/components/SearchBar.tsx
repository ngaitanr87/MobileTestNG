import React, { useEffect, useMemo, useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { searchHeroes } from '../store/slices/searchSlice';

export function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');

  const debounced = useMemo(() => {
    let timer: any;
    return (value: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => dispatch(searchHeroes(value)), 300);
    };
  }, [dispatch]);

  useEffect(() => {
    debounced(text);
  }, [text, debounced]);

  return <TextInput placeholder="Search heroes" value={text} onChangeText={setText} />;
}


