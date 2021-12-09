import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import HomeScreen from '../../src/screens/HomeScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
                                  {
                                    "TotalBalance": -85
                                  },
                                  {
                                    "FirstName": "2",
                                    "LastName": "2",
                                    "Email": "abc@e.com",
                                    "Balance": 0
                                  },
                                  {
                                    "FirstName": "fake",
                                    "LastName": "1",
                                    "Email": "fake1@gmail.com",
                                    "Balance": -19.5
                                  },
                                  {
                                    "FirstName": "fake",
                                    "LastName": "5",
                                    "Email": "fake5@gmail.com",
                                    "Balance": -23.5
                                  },
                                  {
                                    "FirstName": "hi",
                                    "LastName": "there",
                                    "Email": "newEmail@test.com",
                                    "Balance": 0
                                  },
                                  {
                                    "FirstName": "Sam",
                                    "LastName": "Hogenson",
                                    "Email": "shogenson@wisc.edu",
                                    "Balance": -40
                                  },
                                  {
                                    "FirstName": "test",
                                    "LastName": "today",
                                    "Email": "testing@test.com",
                                    "Balance": -2
                                  }
                                ]),
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
    it('render', async () => {
        const {getByText, asFragment} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        fireEvent.press(getByText("-19.5"))
        expect(asFragment).toMatchSnapshot();
        })
        })


});