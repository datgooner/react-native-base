import View from 'components/core/View';
import Text from 'components/core/Text';
import React from 'react';

const Home = () => {
  return (
    <View flex={1} bg="black" alignItems="center" justifyContent="center">
      <Text mx={16} color="white">
        Hello
      </Text>
    </View>
  );
};

export default Home;
