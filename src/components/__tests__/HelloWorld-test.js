import {ReactNativeTestRenderer} from '@react-native/test-renderer';
import {View, Text} from 'react-native';

function TestComponent() {
  return (
    <View>
      <Text>Hello</Text>
      <View />
    </View>
  );
}

describe('snapshot example', () => {
  it('returns expected JSON output based on renderer component', () => {
    const result = ReactNativeTestRenderer.render(<TestComponent />)
    expect(result.toJSON()).toMatchSnapshot()
  }, 100000);
});
