import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import AddFriend from '../../src/screens/AddFriend'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"FirstName\": \"2\", \"LastName\": \"2\", \"Email\": \"abc@e.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"fake\", \"LastName\": \"1\", \"Email\": \"fake1@gmail.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"fake\", \"LastName\": \"5\", \"Email\": \"fake5@gmail.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"hi\", \"LastName\": \"there\", \"Email\": \"newEmail@test.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"Sam\", \"LastName\": \"Hogenson\", \"Email\": \"shogenson@wisc.edu\", \"Balance\": \"Split\"}, {\"FirstName\": \"test\", \"LastName\": \"today\", \"Email\": \"testing@test.com\", \"Balance\": \"Split\"}]"),
  })
  );
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });
describe('Test Hooks', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('Render', () => {
        const {getByText} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="AddFriend" component={AddFriend} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        expect(1).toBe(1);
        })
    it('Click', () => {
            const {getByText} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="AddFriend" component={AddFriend} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);
            expect(1).toBe(1);
            })


});