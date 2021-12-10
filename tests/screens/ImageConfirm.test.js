import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import ImageConfirm from '../../src/screens/ImageConfirm'
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
describe('Image Confirm', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('Select Confirm', async () => {
        const {getByText, asFragment} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="ImageConfirm" component={ImageConfirm} initialParams ={{stack: "group"},{itemEmail : "e@something.com"},{photo :{uri: 'https://reactnative.dev/img/tiny_logo.png'}}} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        fireEvent.press(getByText("Confirm"))
        expect(asFragment).toMatchSnapshot();
        })})
        it('Select Confirm', async () => {
            const {getByText, asFragment} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="ImageConfirm" component={ImageConfirm} initialParams ={{stack: "friend"},{itemEmail : "e@something.com"},{photo :{uri: 'https://reactnative.dev/img/tiny_logo.png'}}} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);
            await waitFor(() => {
            fireEvent.press(getByText("Confirm"))
            expect(asFragment).toMatchSnapshot();
            })})
    it('Select Retry', async () => {
            const {getByText, asFragment} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="ImageConfirm" component={ImageConfirm} initialParams ={{itemEmail : "e@something.com"},{photo :{uri: 'https://reactnative.dev/img/tiny_logo.png'}}} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);
            await waitFor(() => {
            fireEvent.press(getByText("Retry"))
            expect(asFragment).toMatchSnapshot();
            })})


});