import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import Entry, {buttonPress} from '../../src/components/EntryComponent';
import {NavigationContainer} from '@react-navigation/native';
import ReactTestUtils from 'react-dom/test-utils';
import { act } from 'react-dom/test-utils';
import {SafeAreaView, FlatList, Image, TouchableOpacity,Dimensions} from "react-native";

describe('Test Hooks', () => {
configure({adapter: new Adapter()});
    it('positive', () => {
    const tree = renderer
        .create(<Entry balance="20"/>);

    expect(tree).toMatchSnapshot();
    });

    it('pending', () => {
        const tree = renderer
            .create(<Entry balance="Pending"/>);

        expect(tree).toMatchSnapshot();
        });
    it('split', () => {
        const tree = renderer
            .create(<Entry balance="Split"/>);

        expect(tree).toMatchSnapshot();
        });
    it('click Button', async () => {
        buttonPress = jest.spyOn(Entry, buttonPress)
        const tree = shallow(<Entry balance="Pending"/>);
        console.log(tree.debug())
        const incButton = tree.find('ForwardRef');
        await act(async () => {
        incButton.simulate('click');
         });
        expect(buttonPress).toBeCalledTimes(1);
        });
});