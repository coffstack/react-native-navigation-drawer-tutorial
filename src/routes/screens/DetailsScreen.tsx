import React from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export function DetailsScreen({route}: ScreenProps) {
  const name = route.params.name;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen: {name}</Text>
    </View>
  );
}
