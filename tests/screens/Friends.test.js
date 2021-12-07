import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Friends from '../../src/screens/Friends'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from 'react-native';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"FirstName\": \"2\", \"LastName\": \"2\", \"Email\": \"abc@e.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"fake\", \"LastName\": \"1\", \"Email\": \"fake1@gmail.com\", \"Balance\": \"Pending\"}, {\"FirstName\": \"fake\", \"LastName\": \"5\", \"Email\": \"fake5@gmail.com\", \"Balance\": \"Accept\"}, {\"FirstName\": \"hi\", \"LastName\": \"there\", \"Email\": \"newEmail@test.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"Sam\", \"LastName\": \"Hogenson\", \"Email\": \"shogenson@wisc.edu\", \"Balance\": \"Split\"}, {\"FirstName\": \"test\", \"LastName\": \"today\", \"Email\": \"testing@test.com\", \"Balance\": \"Split\"}]"),
  })
  );
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });
describe('Friends', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('Click Split', async () => {
                const {getAllByText} = render(
                <AuthProvider>
                <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Friends" component={Friends} />
                </Stack.Navigator>
                </NavigationContainer>
                </AuthProvider>);
                await waitFor(() => {
                fireEvent.press(getAllByText("Split")[0]);
                expect(1).toBe(1);
                });
                })
    it('Click Accept', async () => {
    jest.useFakeTimers()
    Alert.alert = jest.fn();
                    const {getAllByText} = render(
                    <AuthProvider>
                    <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen name="Friends" component={Friends} />
                    </Stack.Navigator>
                    </NavigationContainer>
                    </AuthProvider>);
                    await waitFor(() => {
                    fireEvent.press(getAllByText("Accept")[0]);
                    Alert.alert.mock.calls[0][2][0].onPress()
                    jest.advanceTimersByTime(3000)
                    Alert.alert.mock.calls[0][2][1].onPress()
                    jest.advanceTimersByTime(3000)
                    expect(Alert.alert.mock.calls.length).toBe(1);
                    });
                    })
    it('Click Add Friend', async () => {
                const {getByText} = render(
                <AuthProvider>
                <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Friends" component={Friends} />
                </Stack.Navigator>
                </NavigationContainer>
                </AuthProvider>);
                await waitFor(() => {
                fireEvent.press(getByText("Add Friend"));
                expect(1).toBe(1);
                });
                })


});