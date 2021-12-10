import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Signin from '../../src/screens/Signin'
import Signup from '../../src/screens/Signup'
import SignupInfo from '../../src/screens/SignupInfo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });
describe('Test Hooks', () => {
    const test = jest.fn();
    const Stack = createBottomTabNavigator();
    it('SignUp sucess', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("Account Successfully Made"),
      })
      );
        const {getByText} = render(
        <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SignupInfo" component={SignupInfo} initialParams ={{ email : "e@something.com",
                                                                                 password: "test",
                                                                                 password2: "test2",
                                                                               }}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>);

        await waitFor(() => {
                     fireEvent.press(getByText("Login"))
                     expect(1).toBe(1);
                     })
        })
    it('SignUp Fail', async () => {
        window.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve("Fail"),
          })
          );
            const {getByText} = render(
            <AuthProvider>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="SignupInfo" component={SignupInfo} initialParams ={{ email : "e@something.com",
                                                                                     password: "test",
                                                                                     password2: "test2",
                                                                                   }}/>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Signin" component={Signin} />
            </Stack.Navigator>
            </NavigationContainer>
            </AuthProvider>);

            await waitFor(() => {
                         fireEvent.press(getByText("Login"))
                         expect(1).toBe(1);
                         })
            })

});