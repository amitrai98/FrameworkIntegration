import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PromiseExp from '../src/screens/generalconepts/promiseexp/PromiseExp';

it('check async await method', () => {
  let promiseExpInstance = renderer.create(<PromiseExp />).getInstance();
  expect(promiseExpInstance.testMe(5)).toEqual(10);
});
