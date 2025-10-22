import React from 'react';
import styles from './search-input.module.css';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        aria-label="Search heroes"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};
