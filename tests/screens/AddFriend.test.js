import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import AddFriend from '../../src/screens/AddFriend'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from 'react-native';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"FirstName\": \"2\", \"LastName\": \"2\", \"Email\": \"abc@e.com\", \"Balance\": \"Accept\"}, {\"FirstName\": \"fake\", \"LastName\": \"1\", \"Email\": \"fake1@gmail.com\", \"Balance\": \"Pending\"}, {\"FirstName\": \"fake\", \"LastName\": \"5\", \"Email\": \"fake5@gmail.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"hi\", \"LastName\": \"there\", \"Email\": \"newEmail@test.com\", \"Balance\": \"Split\"}, {\"FirstName\": \"Sam\", \"LastName\": \"Hogenson\", \"Email\": \"shogenson@wisc.edu\", \"Balance\": \"Split\"}, {\"FirstName\": \"test\", \"LastName\": \"today\", \"Email\": \"testing@test.com\", \"Balance\": \"Split\"}]"),
  })
  );
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });
describe('Test Hooks', () => {
    const Stack = createBottomTabNavigator();
    it('Render Snapshot', async () => {
        const {asFragment} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="AddFriend" component={AddFriend} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        expect(asFragment).toMatchSnapshot();
        })
        })
        it('Click Accept', async () => {
        jest.useFakeTimers();
        Alert.alert = jest.fn();
        const Patch = global.fetch;
                        const {getAllByText} = render(
                        <AuthProvider>
                        <NavigationContainer>
                        <Stack.Navigator>
                        <Stack.Screen name="AddFriend" component={AddFriend} />
                        </Stack.Navigator>
                        </NavigationContainer>
                        </AuthProvider>);
                        await waitFor(() => {
                        fireEvent.press(getAllByText("Accept")[0]);
                        });
                        expect(Patch).toBeCalledTimes(2);
                        Alert.alert.mock.calls[0][2][0].onPress()
                        jest.advanceTimersByTime(3000)
                        expect(Patch).toBeCalledTimes(4);
                        Alert.alert.mock.calls[0][2][1].onPress()
                        jest.advanceTimersByTime(3000)
                        expect(Patch).toBeCalledTimes(6);
                        })

    it('Click', async () => {
            const {getAllByText, asFragment} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="AddFriend" component={AddFriend} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);
            await waitFor(() => {
            fireEvent.press(getAllByText("Pending")[0]);
            fireEvent.press(getAllByText("Back.")[0]);
            expect(asFragment).toMatchSnapshot();
            })
            })


});