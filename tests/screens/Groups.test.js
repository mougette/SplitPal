import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Groups from '../../src/screens/Groups'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"GroupName\": \"testGroup\", \"GroupID\": 16}, {\"GroupName\": \"second\", \"GroupID\": 17}, {\"GroupName\": \"\", \"GroupID\": 18}, {\"GroupName\": \"test group\", \"GroupID\": 19}]"),
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
    it('Render', async () => {
        const {getByText} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Groups" component={Groups} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        expect(1).toBe(1);
        });
        })
    it('Click Create Group', async () => {
            const {getByText} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Groups" component={Groups} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);
            await waitFor(() => {
            fireEvent.press(getByText("Create Group"));
            expect(1).toBe(1);
            });
            })
    it('Click Split Group', async () => {
                const {getAllByText} = render(
                <AuthProvider>
                <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Groups" component={Groups} />
                </Stack.Navigator>
                </NavigationContainer>
                </AuthProvider>);
                await waitFor(() => {
                fireEvent.press(getAllByText("Split")[0]);
                expect(1).toBe(1);
                });
                })


});