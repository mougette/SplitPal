import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import SearchAndAdd from '../../src/components/SearchAndAddComponent';
import {NavigationContainer} from '@react-navigation/native';


describe('Test Hooks', () => {

    it('navigates on button press', () => {
    const tree = renderer
        .create(<SearchAndAdd/>);

    expect(tree).toMatchSnapshot();
    });
    it('click Button',  () => {
            const Post = jest.fn();
            const {getByText} = render(<SearchAndAdd button="Add Friend" onPress= {Post}/>);
                fireEvent.press(getByText("Add Friend"));
                expect(Post).toBeCalledTimes(1);

        });

});