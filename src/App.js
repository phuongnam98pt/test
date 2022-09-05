import React, { useState } from 'react';
import Switch from 'react-input-switch';

const App = () => {
  const [value, setValue] = useState(0);

  return <Switch value={value} onChange={setValue} />;
};