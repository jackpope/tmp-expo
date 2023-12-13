import {ReactNativeTestRenderer} from '@react-native/test-renderer';
import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer'
import HelloWorld from '../HelloWorld';
import { View, Text } from 'react-native';

describe('rtr', () => {
  it('returns expected JSON output based on renderer component', () => {
    const result = ReactTestRenderer.create(<HelloWorld />)
    expect(result.toJSON()).toMatchSnapshot()
  });
})

describe('render', () => {
  describe('toJSON', () => {
    it('returns expected JSON output based on renderer component', () => {
      const result = ReactNativeTestRenderer.render(<HelloWorld />);
      expect(result.toJSON()).toMatchSnapshot();
    });
  });

  describe('findByTestID', () => {
    it('returns the first element with a matching testID', () => {
      const result = ReactNativeTestRenderer.render(<HelloWorld />);
      expect(result.findByTestID('world-container')).not.toBeNull();
    });
  });

  describe('press', () => {
    it('invokes onPress callback', () => {
      let pressed = false;
      const result = ReactNativeTestRenderer.render(
        <View>
          <Text testID="text" onPress={() => (pressed = true)}>
            Hello
          </Text>
        </View>,
      );
      const text = result.findByTestID('text');
      expect(pressed).toBe(false);
      ReactNativeTestRenderer.fireEvent(text, 'press');
      expect(pressed).toBe(true);
    });
  });
});
