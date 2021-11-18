import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider as AuthProvider} from '../../src/context/AuthContext.js';
import {Context as AuthContext} from '../../src/context/AuthContext';
import {navigate} from '@reach/router'
import GroupEntry from '../../src/components/GroupEntryComponent';
import {NavigationContainer} from '@react-navigation/native';
import ReactTestUtils from 'react-dom/test-utils';
import { act } from 'react-dom/test-utils';
import {SafeAreaView, FlatList, Image, TouchableOpacity,Dimensions} from "react-native";

describe('Test Hooks', () => {
configure({adapter: new Adapter()});
    it('positive', () => {
    const tree = renderer
        .create(<GroupEntry/>);

    expect(tree).toMatchSnapshot();
    });

    it('pending', () => {
        const tree = renderer
            .create(<GroupEntry/>);

        expect(tree).toMatchSnapshot();
        });
    it('click Button', async () => {
        const spy = jest.spyOn(GroupEntry, 'buttonPress');
        const tree = shallow(<GroupEntry balance="Pending"/>);
        console.log(tree.debug())
        const incButton = tree.find('ForwardRef');
        await act(async () => {
        incButton.simulate('click');
         });
        expect(spy).toBeCalledTimes(1);
        });
});