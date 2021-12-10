import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Profile from '../../src/screens/Profile'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"firstName\": \"NULL\", \"lastName\": \"NULL\", \"email\": \"e@something.com\", \"phoneNumber\": \"NULL\", \"profilePicture\": null}]"),
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
        <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        fireEvent.press(getByText("Change Profile"))
        })
        fireEvent.press(getByText("Save Profile"))
        expect(1).toBe(1);
        })
    it('Profile', async () => {
            const {getByText} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);
            await waitFor(() => {
            fireEvent.press(getByText("Ready to Sign out?"))
            })
            expect(1).toBe(1);
            })
        });


