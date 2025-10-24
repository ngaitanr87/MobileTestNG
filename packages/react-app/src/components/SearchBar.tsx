import React, { useEffect, useMemo, useState } from 'react';
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
    performance.mark('search:start');
    debounced(text);
    const endTimer = setTimeout(() => {
      performance.mark('search:end');
      performance.measure('search', 'search:start', 'search:end');
    }, 350);
    return () => clearTimeout(endTimer);
  }, [text, debounced]);

  return <input placeholder="Search heroes" value={text} onChange={(e) => setText(e.target.value)} />;
}


