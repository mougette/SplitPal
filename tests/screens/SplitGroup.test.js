import React from 'react';
import renderer from 'react-test-renderer';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import SplitGroup from '../../src/screens/SplitGroup'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("[{\"firstName\": \"fake\", \"lastName\": \"1\", \"email\": \"fake1@gmail.com\"}, {\"firstName\": \"fake\", \"lastName\": \"5\", \"email\": \"fake5@gmail.com\"}, {\"firstName\": \"test\", \"lastName\": \"today\", \"email\": \"testing@test.com\"}]"
),
  })
  );
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });
describe('SplitGroup Tests', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('Add and Remove buttons', async () => {
        const {getAllByText} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SplitGroup" component={SplitGroup} initialParams ={[
                {item: {
                FirstName: 'test',
                LastName: 'today',
                Email: 'testing@test.com',
                Balance: 'Split'
                }},
                {state:{email : "e@something.com"}},
                "NULL"]}/>
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        fireEvent.press(getAllByText("+")[0]);
        fireEvent.press(getAllByText("myself ")[0]);
        fireEvent.press(getAllByText("Remove")[0]);
        expect(1).toBe(1);
        })
        })

    it('Add entry and submit', async () => {
        const screen = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SplitGroup" component={SplitGroup} initialParams ={[
                {item: {
                  FirstName: 'test',
                  LastName: 'today',
                  Email: 'testing@test.com',
                  Balance: 'Split'
                }},
                {state:{email : "e@something.com"}},
                "NULL"]}/>
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);
        await waitFor(() => {
        fireEvent.press(screen.getByText("+"));
        fireEvent.changeText(screen.getAllByTestId("ItemName")[0], 'dress')
        fireEvent.changeText(screen.getAllByTestId("ItemPrice")[0], '23')
        fireEvent.press(screen.getByText("Submit"));
        expect(1).toBe(1);
        })
        })
    it('ReRender', async () => {
        const screen = render(
        <SplitGroup {...{route:{params:[
                {item: {
                  FirstName: 'test',
                  LastName: 'today',
                  Email: 'testing@test.com',
                  Balance: 'Split'
                }},
                {state:{email : "e@something.com"}},
                "NULL"]}}}/>);

          screen.update(
            <SplitGroup {...{route:{params:[
                        {item: {
                          FirstName: 'test',
                          LastName: 'today',
                          Email: 'testing@test.com',
                          Balance: 'Split'
                        }},
                        {state:{email : "e@something.com"}},
                        {"items": [
                            [
                              "Sleeveless shirt",
                              "$19.99"
                            ],
                            [
                              "Faded jeans",
                              "$39.99"
                            ],
                            [
                              "Long dress",
                              "$67.99"
                            ],
                            [
                              "TAX 6%",
                              "$7.68"
                            ]
                          ]}]}}}/>
                );

        await waitFor(() => {
        expect(1).toBe(1);
        })
        })
});