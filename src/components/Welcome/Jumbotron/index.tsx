import React from 'react';
import logo from 'assets/animation/logo/logo.json';
import Lottie from 'lottie-react-web';
import { useTimeout, useTween } from 'react-use';

const Jumbotron: React.FC = () => {
  const ready = useTimeout(1000);
  const tweenSize = useTween('inOutQuart', 4800, 0);
  const tweenRotation = useTween('inOutQuart', 4000, 0);
  const tweenOpacity = useTween('inOutQuart', 3200, 0);
  return (
    <Lottie
      speed={ready}
      width={`${500 - tweenSize * 400}%`}
      height={`${500 - tweenSize * 400}%`}
      options={{
        animationData: logo,
        loop: false
      }}
      style={{
        opacity: `${tweenOpacity}`,
        marginTop: `${-250 + tweenSize * 250}%`,
        marginLeft: `${-250 + tweenSize * 250}%`,
        transform: `rotate(${120 - tweenRotation * 120}deg)`
      }}
    />
  );
};

export default Jumbotron;
