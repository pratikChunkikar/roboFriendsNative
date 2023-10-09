import React from 'react';
import { View } from 'react-native';
import { Card } from './card';

const CardList = ({ r2d2 }) => {
  return (
    <View>
      {r2d2.map((user, i) => {
        return (
          <Card
            key={i}
            id={r2d2[i].id}
            name={r2d2[i].name}
            email={r2d2[i].email}
          />
        );
      })}
    </View>
  );
};

export default CardList;
