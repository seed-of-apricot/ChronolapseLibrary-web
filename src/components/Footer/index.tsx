import React from 'react';
import { useWindowManager } from 'components/WindowManager';

const Header: React.FC = () => {
  const window = useWindowManager();

  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          top: `${window.scrollHeight - 32}px`,
          right: '16px'
        }}
      >
        Chronolapse Library - 2019
      </div>
    </React.Fragment>
  );
};

export default Header;
