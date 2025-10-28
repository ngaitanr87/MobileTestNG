import React, { useEffect, useMemo, useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
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

  return (
    <TextInput
      style={styles.input}
      placeholder="Search heroes..."
      value={text}
      onChangeText={setText}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
