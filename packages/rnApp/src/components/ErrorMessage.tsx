import React from 'react';
import { Text } from 'react-native';

export function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <Text>{message}</Text>;
}


