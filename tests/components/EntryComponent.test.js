import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native'
import Entry from '../../src/components/EntryComponent';

describe('Test Hooks', () => {
    it('positive', () => {
    const tree = renderer
        .create(<Entry balance="20"/>);

    expect(tree).toMatchSnapshot();
    });
     it('negative', () => {
            const tree = renderer
                .create(<Entry balance="-86"/>);

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
    it('click Button',  () => {
    const buttonPress = jest.fn();
        const {getByText} = render(<Entry balance="groups" onPress= {buttonPress}/>);
        fireEvent.press(getByText("Add"));
        expect(buttonPress).toBeCalledTimes(1);

        });
});