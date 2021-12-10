import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Signin from '../../src/screens/Signin'
import Signup from '../../src/screens/Signup'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ state: { email: "e@something.com", token: "something here" } }),
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
    it('Login', () => {
    const {getByText, asFragment} = render(
    <AuthProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>);
    fireEvent.press(getByText("Login"));
    expect(asFragment).toMatchSnapshot()
    });
    it('SignUp', () => {
        const {getByText, asFragment} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        fireEvent.press(getByText("Sign up Here."));
        expect(asFragment).toMatchSnapshot()
        })


});