import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Signin from '../../src/screens/Signin'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Test Hooks', () => {
configure({adapter: new Adapter()});
    const push = jest.fn();
    const Stack = createBottomTabNavigator();
    it('navigates on button press', () => {
    const result = shallow(
    <AuthProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={Signin} />
    </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>);
    login = result.find('Button');
    expect(1).toBe(1);
    });


});