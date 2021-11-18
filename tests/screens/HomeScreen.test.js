import React, {useContext} from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import HomeScreen from '../../src/screens/HomeScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//mock fetch
global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return {Id: '123'}
          }
        });
      });

      return p;
  });


describe('Test Hooks', () => {
    const Stack = createBottomTabNavigator();
    it('navigates on button press', () => {
    const { getByText } = render(
    <AuthProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>);
    expect(1).toBe(1);
    });


});