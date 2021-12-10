import {Get} from '../../src/components/RestGet';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native'
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("UserName or Password is incorrect"),
  })
  );

describe('Test Hooks', () => {
    it('positive', () => {

    expect(Get()).toMatchSnapshot();
    });
    })