import {render} from '@react-native/test-renderer';

describe('snapshot example', () => {
  it('returns expected JSON output based on renderer component', async () => {
    const result = await render(<TestComponent />);
    expect(result.toJSON()).toMatchSnapshot();
  });
});
