import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor} from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import App from '../../App'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("User info correct"),
  })
  );
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
jest.mock('expo-camera', () => { return "test"});
describe("App", () => {
  it('Login to App', async() => {

     const {getByText} = render(<App/>);

     await waitFor(() => {
             fireEvent.press(getByText("Login"))
             expect(1).toBe(1);
             })
  });
});