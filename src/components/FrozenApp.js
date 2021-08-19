import { mount } from 'frozen/FrozenApp';
import React, { useRef, useEffect } from 'react';

const FrozenApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default FrozenApp
