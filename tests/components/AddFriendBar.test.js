import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import AddFriendBar from '../../src/components/AddFriendBar';
import {NavigationContainer} from '@react-navigation/native';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
  );
describe('Test Hooks', () => {

    it('navigates on button press', () => {
    const tree = renderer
        .create(<AddFriendBar/>);

    expect(tree).toMatchSnapshot();
    });

    it('click Button',  () => {
        const Post = global.fetch;
        const {getByText} = render(<AddFriendBar button="Add Friend"/>);
            fireEvent.press(getByText("Add Friend"));
            expect(Post).toBeCalledTimes(1);

    });

});