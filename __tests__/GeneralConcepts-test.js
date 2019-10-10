import 'react-native';
import React from 'react';
import GeneralConcepts from '../src/screens/generalconepts';
import renderer from 'react-test-renderer';

test('generalconcepts', () => {
  const snap = renderer.create(<GeneralConcepts />).toJSON();
  expect(snap).toMatchSnapshot();
});
