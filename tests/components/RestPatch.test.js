import Patch from '../../src/components/RestPatch';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native'
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
  );

describe('Test Hooks', () => {
    it('positive', () => {

    expect(Patch()).toMatchSnapshot();
    });
    })