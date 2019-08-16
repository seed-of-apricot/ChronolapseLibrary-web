import React from 'react';
import Logo from './Logo';
import Login from './Login';
import { useWindowManager } from 'components/WindowManager';

const Header: React.FC = () => {
  const window = useWindowManager();
  return (
    <React.Fragment>
      <div
        style={{ position: 'fixed', top: '16px', left: '16px', zIndex: 100 }}
      >
        <Logo
          size={20}
          hideTypography={window.scrollTop > window.clientHeight * 0.2}
        />
      </div>
      <div
        style={{ position: 'fixed', top: '18px', right: '18px', zIndex: 100 }}
      >
        <Login
          size={16}
          hideTypography={window.scrollTop > window.clientHeight * 0.2}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
