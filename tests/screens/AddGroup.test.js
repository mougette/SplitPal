import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import AddGroups from '../../src/screens/AddGroups'
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
    it('Render', async () => {
        const {asFragment} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="AddGroups" component={AddGroups} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
       await waitFor(() => {
          expect(asFragment).toMatchSnapshot();
         });
        })
    it('Click Create Group', async () => {
                const {getByText, asFragment} = render(
                <AuthProvider>
                <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="AddGroups" component={AddGroups} />
                </Stack.Navigator>
                </NavigationContainer>
                </AuthProvider>);
                await waitFor(() => {
                fireEvent.press(getByText(" Create Group "));
                expect(asFragment).toMatchSnapshot();
                });
                })
    it('Toggle adding people', async () => {
                    const {getAllByText, asFragment} = render(
                    <AuthProvider>
                    <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen name="AddGroups" component={AddGroups} />
                    </Stack.Navigator>
                    </NavigationContainer>
                    </AuthProvider>);
                    await waitFor(() => {
                    fireEvent.press(getAllByText("Add")[0]);
                    expect(asFragment).toMatchSnapshot();
                    });
                    await waitFor(() => {
                    fireEvent.press(getAllByText("Added")[0]);
                    expect(asFragment).toMatchSnapshot();
                    });
                    })


});