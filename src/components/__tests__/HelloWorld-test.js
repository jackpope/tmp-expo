import {ReactNativeTestRenderer} from '@react-native/test-renderer';
import {View, Text} from 'react-native';
import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer'

function TestComponent() {
  return (
    <View>
      <Text>Hello</Text>
      <View />
    </View>
  );
}

describe('rtr', () => {
  it('returns expected JSON output based on renderer component', () => {
    const result = ReactTestRenderer.create(<TestComponent />)
    expect(result.toJSON()).toMatchSnapshot()
  });
})

describe('react-native-test-renderer', () => {
  it('returns expected JSON output based on renderer component', () => {
    const result = ReactNativeTestRenderer.render(<TestComponent />)
    expect(result.toJSON()).toMatchSnapshot()
  });
});
