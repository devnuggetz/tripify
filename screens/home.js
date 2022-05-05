import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import AddButton from '../components/common/add-button';

const HomeScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View>
        <Text>HomeScreen</Text>
        <AddButton
          buttonText={'ADD NEW TRIP'}
          onPress={() => navigation.navigate('Trip Expenses')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
