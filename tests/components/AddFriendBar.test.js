import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import AddFriendBar from '../../src/components/AddFriendBar';
import {NavigationContainer} from '@react-navigation/native';


describe('Test Hooks', () => {

    it('navigates on button press', () => {
    const tree = renderer
        .create(<AddFriendBar/>);

    expect(tree).toMatchSnapshot();
    });

});