import { Input } from 'react-powerplug';

const Demo = () => (
  <Input>
    {({ bind, value }) => (
      <div>
        <input type="text" {...bind} />
        <p>{value}</p>
      </div>
    )}
  </Input>
);

export default Demo;
