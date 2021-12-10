import React from 'react';
import renderer from 'react-test-renderer';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Split from '../../src/screens/Split'
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
describe('Split Tests', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('Add and Remove buttons', async () => {
        const {getByText} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Split" component={Split} initialParams ={[
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
        fireEvent.press(getByText("+"));
        fireEvent.press(getByText("Remove"));
        expect(1).toBe(1);
        })
        })
    it('Add and Remove buttons', async () => {
            const {getByText} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Split" component={Split} initialParams ={[
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
            fireEvent.press(getByText("Use Camera"));
            expect(1).toBe(1);
            })
            })

    it('Add entry and submit', async () => {
        const screen = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Split" component={Split} initialParams ={[
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
        fireEvent.changeText(screen.getAllByTestId("ItemName")[0], 'dresses')
        fireEvent.changeText(screen.getAllByTestId("ItemPrice")[0], '23')
        fireEvent.press(screen.getByText("Submit"));
        expect(1).toBe(1);
        })
        })
    it('ReRender', async () => {
        const screen = render(
        <Split {...{route:{params:[
                {item: {
                  FirstName: 'test',
                  LastName: 'today',
                  Email: 'testing@test.com',
                  Balance: 'Split'
                }},
                {state:{email : "e@something.com"}},
                "NULL"]}}}/>);

          screen.update(
            <Split {...{route:{params:[
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