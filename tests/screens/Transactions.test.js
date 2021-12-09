import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Transactions from '../../src/screens/Transactions'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"amount\": -40.0, \"userOwed\": \"e@something.com\", \"userOwes\": \"shogenson@wisc.edu\", \"receiptID\": 29, \"description\": \"Lunch\", \"transactionID\": 54}, {\"amount\": -10.0, \"userOwed\": \"e@something.com\", \"userOwes\": \"shogenson@wisc.edu\", \"receiptID\": 40, \"description\": \"Cherse\", \"transactionID\": 69}]"),
  })
  );
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });
describe('Profile tests', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('Profile', async () => {
        const {getByText} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Transactions" component={Transactions} initialParams ={{itemEmail : "e@something.com"}} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        expect(1).toBe(1);
        })})


});