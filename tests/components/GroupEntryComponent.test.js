import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import GroupEntry from '../../src/components/GroupEntryComponent';

describe('Test Hooks', () => {
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
        const buttonPress = jest.fn();
                const {getByText} = render(<GroupEntry name="jake" onPress= {buttonPress} />);
                fireEvent.press(getByText("jake"));
                expect(buttonPress).toBeCalledTimes(1);

        });
});